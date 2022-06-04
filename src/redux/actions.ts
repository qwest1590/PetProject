import { AppDispatch } from "..";
import {
  ADD_INCOME_ITEM,
  TOGGLE_BURGER_MENU,
  GET_TODAY_CURRENCY_RATE,
  ADD_FUNDS_ITEM,
  ADD_EXPENCES_ITEM,
} from "./types";

export function addIncomeItem(payload: any) {
  return {
    type: ADD_INCOME_ITEM,
    payload: payload,
  };
}

export function addFundsItem(payload: any) {
  return {
    type: ADD_FUNDS_ITEM,
    payload: payload,
  };
}

export function addExpencesItem(payload: any) {
  return {
    type: ADD_EXPENCES_ITEM,
    payload: payload,
  };
}
export function toggleBurgerMenu() {
  return {
    type: TOGGLE_BURGER_MENU,
  };
}

export function getTodayCurrencyRate() {
  const [day, month, year] = new Date().toLocaleDateString().split(".");
  return async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch(
      `https://www.cbr-xml-daily.ru/archive/${year}/${month}/${day}/daily_json.js`
    );
    const json = await response.json();
    dispatch({
      type: GET_TODAY_CURRENCY_RATE,
      USD: json.Valute.USD.Value.toFixed(2),
      EUR: json.Valute.EUR.Value.toFixed(2),
    });
  };
}
