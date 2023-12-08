import {RoutePathsEnum} from "src/utils/enums/general/RoutePathsEnum";
import {useLanguageStore} from "stores/language";

export const useAppLink = () => {
  const language = useLanguageStore();

  const languageLayoutLink = () => `/${language.getLanguage?.value ? `${language.getLanguage.value}/` : ""}`;

  const homeLink = () => {
    return `${languageLayoutLink()}${RoutePathsEnum.HOME_PATH}`;
  }

  return {
    homeLink,
  }
}
