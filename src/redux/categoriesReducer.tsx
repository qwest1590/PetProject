interface CategoriesState {
  income: object[];
  funds: object[];
  expences: object[];
  nextId: number;
}

const inititalState: CategoriesState = {
  income: [],
  funds: [],
  expences: [],
  nextId: 1,
};

export const categoriesReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case "ADD_INCOME_ITEM":
      return {
        ...state,
        income: [...state.income, action.payload],
        nextId: state.nextId + 1,
      };
    case "ADD_FUNDS_ITEM":
      return {
        ...state,
        funds: [...state.funds, action.payload],
        nextId: state.nextId + 1,
      };
    case "ADD_EXPENCES_ITEM":
      return {
        ...state,
        expences: [...state.expences, action.payload],
        nextId: state.nextId + 1,
      };
    default:
      return state;
  }
};
