import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory, Router
} from 'vue-router';

import routes from './routes';
import beforeEachGuard from "src/router/guards/BeforeEachGuard";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

let routerInstance: Router | null = null;

export default route(function (/* { store, ssrContext } */) {
  if (routerInstance) return routerInstance;

  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
      if (to.matched.some(record => record.children) && to.meta.keepScrollPosition && from.meta.keepScrollPosition) {
        return {};
      }
      // Otherwise, use the default behavior
      return savedPosition || { top: 0 };
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  router.beforeEach(beforeEachGuard);
  routerInstance = router;

  return routerInstance;
});
