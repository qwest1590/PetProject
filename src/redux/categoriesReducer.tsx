interface CategoriesState {
  items: object[];
  seconditems: object[];
}

const inititalState: CategoriesState = {
  items: [],
  seconditems: [],
};

export const incomeReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case "ADD_INCOME_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
