/* eslint-disable @nx/enforce-module-boundaries */
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { AlignJustify } from 'lucide-react';
import { AppStoreContext } from '@boodi/contexts/app-store.context';
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@boodi/ui';
import useSupabaseService from '@boodi/hooks/supabase.hook';

/* eslint-disable-next-line */
export interface HeaderProps {
  showLogo?: boolean;
}

export const Header = observer((props: HeaderProps) => {
  const appStore = useContext(AppStoreContext);
  const supabaseService = useSupabaseService();

  const { showLogo = true } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: session, error: sessionError } =
        await supabaseService.supabase.auth.getSession();
      if (!sessionError) {
        setSession(session.session);
      }
    };

    getSession();
  }, [supabaseService.supabase.auth]);

  const menuOpenChange = (e: boolean) => {
    setIsMenuOpen(e);
  };

  const signInWithOAuth = async () => {
    const { data, error } = await supabaseService.supabase.auth.signInWithOAuth(
      {
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      }
    );
  };

  const pastMessages = async () => {
    navigate('/past-messages');
  };

  const signOut = async () => {
    const { error } = await supabaseService.supabase.auth.signOut();
    if (!error) window.location.reload();
  };

  return (
    <div className={'flex justify-between w-full px-5 py-3'}>
      {showLogo ? (
        <img
          src="boodi-logo.svg"
          alt="Boodi.ai logo"
          className="w-[90px] hover:cursor-pointer hover:brightness-90"
          onClick={() => navigate('/')}
        />
      ) : (
        <div />
      )}
      <div className="flex justify-end w-full">
        {session && (
          <span className="text-xs text-white pt-3 pr-2">
            {session?.user?.user_metadata?.full_name}
          </span>
        )}
        <DropdownMenu open={isMenuOpen} onOpenChange={(e) => menuOpenChange(e)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="dark:text-blueIce-500 dark:hover:text-blueIce-700"
            >
              <span className="sr-only">Toggle theme</span>
              <AlignJustify />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent hideWhenDetached align="end">
            {!session && (
              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Sign In
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[480px]">
                  <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                  </DialogHeader>
                  <div className="my-8">
                    <Button
                      variant="outline"
                      className="w-[200px] flex justify-between mx-auto rounded-3xl"
                      onClick={() => {
                        signInWithOAuth();
                      }}
                    >
                      <img
                        src="/img/Google-G-logo.svg"
                        alt="Google Sign In"
                        className="mr-auto"
                      />
                      <span>Continue with Google</span>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
            {session && (
              <>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                    pastMessages();
                  }}
                >
                  Past Messages
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
});

export default Header;
