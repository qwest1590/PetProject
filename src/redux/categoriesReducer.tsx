interface CategoriesState {
  income: object[];
  funds: object[];
  expences: object[];
}

const inititalState: CategoriesState = {
  income: [],
  funds: [],
  expences: [],
};

export const categoriesReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case "ADD_INCOME_ITEM":
      return { ...state, income: [...state.income, action.payload] };
    default:
      return state;
  }
};
