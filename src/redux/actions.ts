import { ADD_INCOME_ITEM } from "./types";
export function addIncomeItem(payload: any) {
  return {
    type: ADD_INCOME_ITEM,
    payload: payload,
  };
}
