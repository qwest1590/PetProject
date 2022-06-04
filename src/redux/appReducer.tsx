const initialState = {
  burgerIsOpen: false,
};
export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_BURGER_MENU":
      return { ...state, burgerIsOpen: !state.burgerIsOpen };
    default:
      return state;
  }
};
