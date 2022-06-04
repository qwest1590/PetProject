import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { appReducer } from "./appReducer";
import { currencyRateReducer } from "./currencyRateReducer";
export const rootReducer = combineReducers({
  app: appReducer,
  categories: categoriesReducer,
  currencyRate: currencyRateReducer,
});
