import { type } from "os";
import { AppDispatch } from "..";
import {
  ADD_INCOME_ITEM,
  TOGGLE_BURGER_MENU,
  GET_TODAY_CURRENCY_RATE,
  ADD_FUNDS_ITEM,
  ADD_EXPENCES_ITEM,
  STARTED_EDIT_ITEM,
  FINISHED_EDIT_INCOME_ITEM,
  FINISHED_EDIT_FUNDS_ITEM,
  FINISHED_EDIT_EXPENCES_ITEM,
  DELETE_INCOME_ITEM,
  DELETE_FUNDS_ITEM,
  DELETE_EXPENCES_ITEM,
  LOGGED_IN,
  LOG_OUT,
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

export function startedEditItem(payload: any) {
  return {
    type: STARTED_EDIT_ITEM,
    payload: payload,
  };
}

export function finishedEditIncomeItem(payload: any) {
  return {
    type: FINISHED_EDIT_INCOME_ITEM,
    payload: payload,
  };
}

export function finishedEditFundsItem(payload: any) {
  return {
    type: FINISHED_EDIT_FUNDS_ITEM,
    payload: payload,
  };
}

export function finishedEditExpencesItem(payload: any) {
  return {
    type: FINISHED_EDIT_EXPENCES_ITEM,
    payload: payload,
  };
}

export function deleteIncomeItem(payload: number) {
  return {
    type: DELETE_INCOME_ITEM,
    payload: payload,
  };
}

export function deleteFundsItem(payload: number) {
  return {
    type: DELETE_FUNDS_ITEM,
    payload: payload,
  };
}

export function deleteExpencesItem(payload: number) {
  return {
    type: DELETE_EXPENCES_ITEM,
    payload: payload,
  };
}

export function toggleBurgerMenu() {
  return {
    type: TOGGLE_BURGER_MENU,
  };
}

export function loggedIn(payload: object) {
  return {
    type: LOGGED_IN,
    payload: payload,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
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
