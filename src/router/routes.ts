import { RouteRecordRaw } from 'vue-router';
import { RoutePathsEnum } from 'src/utils/enums/general/RoutePathsEnum';
import { RouteNamesEnum } from 'src/utils/enums/general/RouteNamesEnum';

const routes: RouteRecordRaw[] = [
  {
    path: `/${RoutePathsEnum.LANGUAGE_LAYOUT_PATH}`,
    component: () => import( /*webpackChunkName: "language-layout"*/ 'layouts/LanguageLayout.vue'),
    children: [
      {
        path: RoutePathsEnum.APP_EMPTY_PATH,
        component: () => import( /*webpackChunkName: "main-layout"*/ 'layouts/MainLayout.vue'),
        children: [
          {
            name: RouteNamesEnum.INTRO_ROUTE_NAME,
            path: RoutePathsEnum.APP_EMPTY_PATH,
            component: () => import( /*webpackChunkName: "intro-page"*/ 'pages/IntroPage.vue'),
          },
          {
            name: RouteNamesEnum.HOME_ROUTE_NAME,
            path: RoutePathsEnum.HOME_PATH,
            component: () => import( /*webpackChunkName: "index-page"*/ 'pages/IndexPage.vue'),
          },

        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/NoRecordsPage.vue'),
  },
];

export default routes;
