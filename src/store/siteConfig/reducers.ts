import {getSiteConfig} from "./actions";
import {GET_SITE_CONFIG} from "./types";

interface ISiteConfigTypes {
  siteConfig: any;
}

interface ISiteConfigAction {
  data: any;
  type: string;
}

const initialState: ISiteConfigTypes = {
  siteConfig: getSiteConfig().data,
};

export function siteConfigReducer(
    state = initialState,
    action: ISiteConfigAction
): any {
  switch (action.type) {
    case GET_SITE_CONFIG: {
      return {
        ...state,
        siteConfig: action
      };
    }

    default:
      return state;
  }
}
