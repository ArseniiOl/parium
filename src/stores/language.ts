import { createPinia, defineStore } from 'pinia';
import { LanguagesEnum } from 'src/utils/enums/language/LanguagesEnum';
import router from 'src/router';
import { useQuasar } from 'quasar';

export const AppLanguages = [LanguagesEnum.EN, LanguagesEnum.UA, LanguagesEnum.PL, LanguagesEnum.DEU];

export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
    language: null as LanguagesEnum | null,
  }),
  getters: {
    getLanguage(): string | null {
      return this.language;
    },
  },
  actions: {
    setLanguage(payload: LanguagesEnum) {
      this.language = payload;
      localStorage.setItem('lang', payload);
    },
    async trimLangFromUrl() {
      const routerInstance = (await router({ store: createPinia() }));
      let route = routerInstance.currentRoute.value.path;
      for (const item of AppLanguages) {
        route = route.replace(`/${item}`, '');
      }
      return route;
    },
    async reinstallI18n(locale: string) {
      const $q = useQuasar();
      const lang = await import(`quasar/lang/${locale || LanguagesEnum.UA}`)
      $q.lang.set(lang);
    },
    async replaceLanguage() {
      const trimmedUrl = this.trimLangFromUrl();
      const locale = localStorage.getItem('lang') || LanguagesEnum.UA;
      (await router({ store: createPinia() })).push({
        path: '/' + locale + trimmedUrl,
      });
      await this.reinstallI18n(locale);
    },
  },
});
