import {RoutePathsEnum} from "src/utils/enums/general/RoutePathsEnum";

export const useAppLink = () => {
  const homeLink = () => {
    return RoutePathsEnum.HOME_PATH;
  }

  return {
    homeLink,
  }
}
