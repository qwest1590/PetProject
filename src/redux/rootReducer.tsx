import { combineReducers } from "redux";
import { incomeReducer } from "./incomeReducer";
export const rootReducer = combineReducers({
  income: incomeReducer,
});
