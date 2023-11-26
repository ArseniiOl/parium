import {_RouteRecordBase, NavigationGuardNext, RouteLocationNormalized,} from "vue-router";
import {AppLanguages, LanguagesEnum} from "stores/language";

const beforeEachGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (to.params.lang && AppLanguages.findIndex(i => i.value !== to.params.lang as LanguagesEnum) === -1) {
    localStorage.removeItem("lang");
    next('/')
  } else {
    if (
      to.matched.some(
        (record: _RouteRecordBase): unknown => record.meta?.requiresAuth || record.meta?.requiresAuth == undefined
      )
    ) {
      next()
    }
  }
};

export default beforeEachGuard;
