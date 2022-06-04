import { combineReducers } from "redux";
import { incomeReducer } from "./categoriesReducer";
import { appReducer } from "./appReducer";
import { currencyRateReducer } from "./currencyRateReducer";
export const rootReducer = combineReducers({
  app: appReducer,
  income: incomeReducer,
  currencyRate: currencyRateReducer,
});
