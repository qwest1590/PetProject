const initialState = {
  burgerIsOpen: false,
  currentUser: {},
};
export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_BURGER_MENU":
      return { ...state, burgerIsOpen: !state.burgerIsOpen };
    case "LOGGED_IN":
      return {
        ...state,
        currentUser: {
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        currentUser: {},
      };
    default:
      return state;
  }
};
