import { RouteRecordRaw } from 'vue-router';
import { RoutePathsEnum } from 'src/utils/enums/general/RoutePathsEnum';
import { RouteNamesEnum } from 'src/utils/enums/general/RouteNamesEnum';

const language = localStorage.getItem('lang');

const routes: RouteRecordRaw[] = [
  {
    path: RoutePathsEnum.APP_ROOT_PATH,
    redirect: `/${language ? `${language}/` : ''}${
      RoutePathsEnum.APP_EMPTY_PATH
    }`,
  },
  {
    name: RouteNamesEnum.LANGUAGE_LAYOUT,
    path: RoutePathsEnum.LANGUAGE_LAYOUT_PARAMS,
    component: () => import( /*webpackChunkName: "language-layout"*/ 'layouts/LanguageLayout.vue'),
    children: [
      {
        name: RouteNamesEnum.MAIN_LAYOUT,
        path: RoutePathsEnum.APP_EMPTY_PATH,
        component: () => import( /*webpackChunkName: "main-layout"*/ 'layouts/MainLayout.vue'),
        children: [
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
