import { Footer, Header, Tabs, TabsList, TabsTrigger } from '@boodi/ui';
import styles from './tools-page.module.scss';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ToolsPageProps {}

enum PageTabs {
  WisdomTool1 = `What's on your mind?`,
  WisdomTool2 = 'Quote',
  WisdomTool3 = 'Reflection',
  WisdomTool4 = 'High Temperature',
  Release = 'Release your worries',
}

export function ToolsPage(props: ToolsPageProps) {
  const navigate = useNavigate();

  const tabs: PageTabs[] = [
    PageTabs.WisdomTool1,
    PageTabs.WisdomTool2,
    PageTabs.WisdomTool3,
    PageTabs.WisdomTool4,
    PageTabs.Release,
  ];

  return (
    <div
      id="ToolsPage"
      className="w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-between bg-gradrad-2"
    >
      <Header />

      <div className="page-content h-full w-full max-w-[300px] py-10 mx-auto">
        <h1 className="text-center mb-5">More Tools</h1>

        <Tabs
          defaultValue={PageTabs.WisdomTool1}
          orientation="vertical"
          className="w-full"
        >
          <TabsList className="flex flex-col bg-slate-700 mb-5">
            {tabs.map((tabValue) => (
              <TabsTrigger
                key={tabValue}
                value={tabValue}
                className="w-full"
                onClick={(e: any) => {
                  //console.log('what is e', e);
                  switch (tabValue) {
                    case PageTabs.WisdomTool1:
                      navigate('/wisdom?v=1');
                      break;
                    case PageTabs.WisdomTool2:
                      navigate('/wisdom?v=2');
                      break;
                    case PageTabs.WisdomTool3:
                      navigate('/wisdom?v=3');
                      break;
                    case PageTabs.WisdomTool4:
                      navigate('/wisdom?v=4');
                      break;
                    case PageTabs.Release:
                      navigate('/release-your-worries');
                      break;
                    default:
                      break;
                  }
                }}
              >
                {tabValue}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}

export default ToolsPage;
