import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { bookmarkReducer } from "./bookmarks/reducers";
import { categoryReducer } from "./categories/reducers";
import {siteConfigReducer} from "./siteConfig/reducers";
import {userThemeReducer} from "./userTheme/reducers";

const rootReducer = combineReducers({
  bookmarkReducer,
  categoryReducer,
  siteConfigReducer,
  userThemeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function index() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
