import nprogress from 'nprogress';
import type { Router } from 'vitepress';
import './index.css';

const vitepressNprogress = (router: Router) => {
  if (typeof window === 'undefined') return;

  nprogress.configure({ showSpinner: false });

  const originalBefore = router.onBeforeRouteChange;
  const originalAfter = router.onAfterPageLoad;

  router.onBeforeRouteChange = async (to) => {
    nprogress.start();
    return await originalBefore?.(to);
  };

  router.onAfterPageLoad = async (to) => {
    nprogress.done();
    await originalAfter?.(to);
  };

  return nprogress;
};

export default vitepressNprogress;
