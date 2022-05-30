const inititalState = {
  items: [
    {
      id: 0,
      name: "Едадилище",
      icon: "food",
      value: 5,
    },
    {
      id: 1,
      name: "Накопления",
      icon: "ruble",
      value: 225,
    },
  ],
};
export const incomeReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case "ADD_INCOME_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
