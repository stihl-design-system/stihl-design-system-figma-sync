import {
  DSActionButton,
  DSButton,
  DSHeader,
  DSNotification,
  DSTopBar,
  useDSToast,
} from '@stihl-design-system/components';
import { useState } from 'react';
import styles from './App.module.scss';
import { ReviewList } from './pages/ReviewList.tsx';
import { ReviewPage } from './pages/ReviewPage.tsx';
import { logOut } from './lib/logout.ts';
import { useReviewer } from './lib/reviewer.tsx';
import { usePageTitle } from './lib/usePageTitle.ts';
import { useRoute } from './router.ts';

export function App() {
  const { path } = useRoute();
  const reviewId = path.match(/^\/r\/([^/]+)\/?$/)?.[1];
  const { name, changeName } = useReviewer();
  const { queueDSToastMessage } = useDSToast();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogOut = (): void => {
    logOut().then(
      (done) => {
        if (done) {
          setLoggedOut(true);
        } else {
          queueDSToastMessage(
            'This browser keeps the login until it is closed. Close all browser windows to log out.',
            { variant: 'warning' }
          );
        }
      },
      () =>
        queueDSToastMessage('Logging out failed. Please try again.', {
          variant: 'warning',
        })
    );
  };

  return (
    <div className={styles.app}>
      <DSHeader
        variant='full'
        logoProps={{
          href: '/',
          aria: { 'aria-label': 'STIHL Design System review, all reviews' },
        }}
        brandAddOnProps={{ children: 'Design review' }}
      >
        <DSTopBar>
          <DSTopBar.BrandArea />
          <DSTopBar.PrimaryArea>
            {!loggedOut && (
              <div className={styles.account}>
                <DSActionButton
                  iconName='user'
                  iconPosition='top'
                  tooltip={
                    name
                      ? 'Change the name saved with your decisions'
                      : 'Set the name saved with your decisions'
                  }
                  onClick={changeName}
                >
                  {name ? shorten(name) : 'Set name'}
                </DSActionButton>
                <DSActionButton
                  iconName='exit'
                  iconPosition='top'
                  onClick={handleLogOut}
                >
                  Log out
                </DSActionButton>
              </div>
            )}
          </DSTopBar.PrimaryArea>
        </DSTopBar>
      </DSHeader>
      {loggedOut ? (
        <LoggedOut />
      ) : reviewId ? (
        <ReviewPage key={reviewId} id={reviewId} />
      ) : (
        <ReviewList />
      )}
    </div>
  );
}

/** Keeps a long name from pushing the top bar apart */
function shorten(name: string): string {
  return name.length > 24 ? `${name.slice(0, 23)}…` : name;
}

/** Shown from memory: nothing is requested, so the browser does not ask for the login again on its own */
function LoggedOut() {
  usePageTitle('Logged out');
  return (
    <main id='main' className={styles.loggedOut}>
      <DSNotification variant='success'>You are logged out.</DSNotification>
      <DSButton
        type='button'
        variant='outline'
        onClick={() => window.location.reload()}
      >
        Log in again
      </DSButton>
    </main>
  );
}
