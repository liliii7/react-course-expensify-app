import { createStore, combineReducers } from "redux";

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const one = store.dispatch(
  addExpense({ description: "Rent", amount: 200, createdAt: 1000 })
);
const two = store.dispatch(
  addExpense({ description: "Coffe", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: one.expense.id }));

// store.dispatch(editExpense(two.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("Rent"));

// store.dispatch(sortByamount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

// console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "fksdfsdf",
      description: "Januray Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: "laura",
  age: 12,
};

