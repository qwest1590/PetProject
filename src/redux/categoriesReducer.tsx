import { ICategoryProps } from "../components/Category";

interface CategoriesState {
  income: ICategoryProps[];
  funds: object[];
  expences: object[];
  nextId: number;
  itemOnEdit: object;
}

const inititalState: CategoriesState = {
  income: [],
  funds: [],
  expences: [],
  nextId: 1,
  itemOnEdit: {},
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
    case "STARTED_EDIT_ITEM":
      return { ...state, itemOnEdit: action.payload };
    case "FINISHED_EDIT_INCOME_ITEM":
      const editIncID = action.payload.id;
      const incCopy = [...state.income];
      const incIndex = incCopy.findIndex((id) => id === editIncID);
      incCopy.splice(incIndex, 1, action.payload);
      return {
        ...state,
        income: [...incCopy],
        itemOnEdit: {},
      };
    case "FINISHED_EDIT_FUNDS_ITEM":
      const editFundsID = action.payload.id;
      const fundsCopy = [...state.funds];
      const fundsIndex = fundsCopy.findIndex((id) => id === editFundsID);
      fundsCopy.splice(fundsIndex, 1, action.payload);
      return {
        ...state,
        funds: [...fundsCopy],
        itemOnEdit: {},
      };
    case "FINISHED_EDIT_EXPENCES_ITEM":
      const editExpencesID = action.payload.id;
      const expencesCopy = [...state.expences];
      const expencesIndex = expencesCopy.findIndex(
        (id) => id === editExpencesID
      );
      expencesCopy.splice(expencesIndex, 1, action.payload);
      return {
        ...state,
        expences: [...expencesCopy],
        itemOnEdit: {},
      };
    case "DELETE_INCOME_ITEM":
      const deleteIncID = action.payload.id;
      const copyInc = [...state.income];
      const deleteIncIndex = copyInc.findIndex((id) => id === deleteIncID);
      copyInc.splice(deleteIncIndex, 1);
      return {
        ...state,
        income: [...copyInc],
      };
    case "DELETE_FUNDS_ITEM":
      const deleteFundsID = action.payload.id;
      const copyFunds = [...state.funds];
      const deleteFundsIndex = copyFunds.findIndex(
        (id) => id === deleteFundsID
      );
      copyFunds.splice(deleteFundsIndex, 1);
      return {
        ...state,
        funds: [...copyFunds],
      };
    case "DELETE_EXPENCES_ITEM":
      const deleteExpencesID = action.payload.id;
      const copyExpences = [...state.expences];
      const deleteExpencesIndex = copyExpences.findIndex(
        (id) => id === deleteExpencesID
      );
      copyExpences.splice(deleteExpencesIndex, 1);
      return {
        ...state,
        expences: [...copyExpences],
      };
    default:
      return state;
  }
};
