import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { bookmarkReducer } from "./bookmarks/reducers";
import { categoryReducer } from "./categories/reducers";
import {getSiteConfig} from "./siteConfig/actions";
import {siteConfigReducer} from "./siteConfig/reducers";
import {userThemeReducer} from "./userTheme/reducers";

const rootReducer = combineReducers({
  bookmarkReducer,
  categoryReducer,
  siteConfigReducer,
  userThemeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function callApi(endpoint: string, params: RequestInit) {
  const API_URL = getSiteConfig().data.api.baseUrl;

  params.cache = "no-cache";
  params.mode = "cors";
  params.method = params.method || 'GET';

  const headers = new Headers();

  headers.append('Access-Control-Allow-Origin', window.location.href);
  headers.append('Access-Control-Allow-Credentials', 'true');

  if (params.method === 'POST') {
    params.headers = headers;
  }

  return fetch(`${API_URL}/${endpoint}`, params)
      .then(response => response.json().then(json => ({ json, response })))
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json);
        }

        return json;
      });
}

export default function index() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
