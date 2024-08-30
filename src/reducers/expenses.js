const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((x) => x.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((x) => {
        if (x.id === action.id) {
          return {
            ...x,
            ...action.updates,
          };
        } else {
          return x;
        }
      });
      case "SET_EXPENSES":
        return action.expenses;
    default:
      return state;
  }
};

