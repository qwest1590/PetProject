const initialState = {
  USD: 0,
  EUR: 0,
};
export const currencyRateReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "GET_TODAY_CURRENCY_RATE":
      return {
        ...state,
        USD: action.USD,
        EUR: action.EUR,
      };
    default:
      return state;
  }
};
