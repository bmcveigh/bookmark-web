import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { bookmark } from "./bookmark/reducers";
import { bookmarkCategory } from "./bookmarkCategory/reducers";
import { bookmarkSpace } from "./bookmarkSpace/reducers";
import {siteConfigReducer} from "./siteConfig/reducers";
import {userLoginReducer} from "./userLogin/reducers";
import {userThemeReducer} from "./userTheme/reducers";

const rootReducer = combineReducers({
  bookmark,
  bookmarkCategory,
  bookmarkSpace,
  siteConfigReducer,
  userLoginReducer,
  userThemeReducer,
});

export default function index() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
