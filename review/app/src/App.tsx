import { DSHeader, DSTopBar } from '@stihl-design-system/components';
import styles from './App.module.scss';
import { ReviewList } from './pages/ReviewList.tsx';
import { ReviewPage } from './pages/ReviewPage.tsx';
import { useRoute } from './router.ts';

export function App() {
  const { path } = useRoute();
  const reviewId = path.match(/^\/r\/([^/]+)\/?$/)?.[1];

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
          <DSTopBar.PrimaryArea> </DSTopBar.PrimaryArea>
        </DSTopBar>
      </DSHeader>
      {reviewId ? <ReviewPage key={reviewId} id={reviewId} /> : <ReviewList />}
    </div>
  );
}
