import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import {
  Header,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  formatDate,
  Button,
  Pagination,
} from '@boodi/ui';
import useSupabaseService from '@boodi/hooks/supabase.hook';
import useURLService from '@boodi/hooks/url.hook';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './past-messages.module.scss';
import { ChevronDown, ChevronUp } from 'lucide-react';

/* eslint-disable-next-line */
export interface PastMessagesProps {}

interface Interaction {
  created: string;
  input: string;
  output: string;
}

enum PageTabs {
  What = `What's on your mind?`,
  Release = 'Release your worries',
  WisdomTool1 = 'Wisdom tool 1',
  WisdomTool2 = 'Wisdom tool 2',
}

export function PastMessages(props: PastMessagesProps) {
  const urlService = useURLService();
  const supabaseService = useSupabaseService();

  const tabs: PageTabs[] = [
    PageTabs.What,
    PageTabs.Release,
    PageTabs.WisdomTool1,
    PageTabs.WisdomTool2,
  ];
  const [activeTab, setActiveTab] = useState<PageTabs>(PageTabs.What);

  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [sortAscending, setSortAscending] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchInteractions = async (forTab: PageTabs) => {
    const pageSize = 1000;
    const pageNumber = 0;
    const startIndex = pageNumber * pageSize;
    const endIndex = (pageNumber + 1) * pageSize - 1;
    let endpoints: string[] = [];

    setInteractions([]);

    switch (forTab) {
      case PageTabs.What:
        endpoints = [urlService.endpoints.zeroShotWisdom];
        break;
      case PageTabs.Release:
        endpoints = [
          urlService.endpoints.fourNobleTruths,
          urlService.endpoints.eightfoldPathFull,
        ];
        break;
      case PageTabs.WisdomTool1:
        endpoints = [urlService.endpoints.zeroShotWisdom];
        break;
      case PageTabs.WisdomTool2:
        endpoints = [urlService.endpoints.zeroShotWisdomQuote];
        break;
      default:
        endpoints = [];
        break;
    }

    const {
      data: { user },
      error: getUserError,
    } = await supabaseService.supabase.auth.getUser();
    if (getUserError) return;

    if (user) {
      const { data, error: selectError } = await supabaseService.supabase
        .from('interactions')
        .select('*')
        .eq('user_uuid', user.id)
        .in('endpoint', endpoints)
        .order('created_at', { ascending: sortAscending })
        .range(startIndex, endIndex);

      if (!selectError) {
        const mapped = data.map((interaction) => {
          return {
            created: interaction.created_at,
            input: interaction.user_input,
            output: interaction.boodi_output,
          };
        });
        setInteractions(mapped);
      }
    }
  };

  useEffect(() => {
    fetchInteractions(activeTab);
  }, [activeTab, sortAscending]);

  const toggleSort = () => {
    setSortAscending((prevSortAscending) => !prevSortAscending);
  };

  return (
    <div
      id="PastMessagesPage"
      className="w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-start bg-gradrad-2"
    >
      <Header />
      <div className="p-10 w-full max-w-[600px]">
        <Tabs
          defaultValue={PageTabs.What}
          orientation="vertical"
          className="w-full "
        >
          <TabsList className="flex flex-col bg-slate-700 mb-5">
            {tabs.map((tabValue) => (
              <TabsTrigger
                key={tabValue}
                value={tabValue}
                className="w-full"
                onClick={() => {
                  setActiveTab(tabValue);
                  fetchInteractions(tabValue);
                }}
              >
                {tabValue}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-3 items-center w-full">
            <Button
              variant="ghost"
              className="w-[100px]"
              onClick={() => toggleSort()}
            >
              {sortAscending ? (
                <ChevronUp className="w-[1rem] mr-1" />
              ) : (
                <ChevronDown className="w-[1rem] mr-1" />
              )}
              Sort all
            </Button>

            <div className="w-[100px]"></div>
          </div>
          <TabsContent value={activeTab}>
            <Accordion type="single" className="text-slate-100" collapsible>
              {interactions.map((interaction, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="w-full">
                      <div className="text-xs text-slate-300 pb-2">
                        {formatDate(interaction.created)}
                      </div>
                      {interaction.input}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <span
                      className={styles['boodi-response']}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(interaction.output),
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default PastMessages;
