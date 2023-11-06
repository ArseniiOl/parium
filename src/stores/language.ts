import { createPinia, defineStore } from 'pinia';
import router from 'src/router';
import { Quasar } from "quasar";
import {i18n} from "boot/i18n";

export enum LanguagesEnum {
  EN = 'en',
  UA = 'ua',
  PL = 'pl',
  DEU = 'deu'
}

export const AppLanguages = [
  {
    label: "Укр",
    quasarLangName: "uk",
    value: LanguagesEnum.UA,
  },
  {
    label: "Eng",
    quasarLangName: "en-US",
    value: LanguagesEnum.EN,
  },
  {
    label: "DEU",
    quasarLangName: "deu",
    value: LanguagesEnum.DEU,
  },
  {
    label: "PLN",
    quasarLangName: "pl",
    value: LanguagesEnum.PL,
  },

];


export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
    language: null as {value: LanguagesEnum; label: string; quasarLangName: string;} | null,
  }),
  getters: {
    getLanguage(): {value: LanguagesEnum; label: string} | null {
      return this.language;
    }
  },
  actions: {
    async setLanguage(payload: {
      lang?: string;
      replace?: boolean;
    }) {
      const routerInstance = (await router({ store: createPinia() }));
      const code = routerInstance.currentRoute.value.params.lang?.toString() || localStorage.getItem("lang") || navigator.language.split("-")[0] || "";
      this.language = AppLanguages.find(i => i.value === (payload?.lang || code)) || AppLanguages[0];
      const lang = await import(`quasar/lang/${this.language.quasarLangName || AppLanguages[0].quasarLangName}`);
      Quasar.lang.set(lang);

      if (i18n) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        i18n.global.locale.value = this.language.value || LanguagesEnum.UA;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        i18n.global.fallbackLocale.value = this.language.value || LanguagesEnum.UA;
      }
      if (payload?.replace) {
        routerInstance.replace({params: { lang: this.language.value }})
      }
      localStorage.setItem("lang", payload?.lang || code);
    },
  }
});
