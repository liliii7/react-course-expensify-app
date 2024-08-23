import React from "react";
import ExpenseList from "./ExpensesList";
import ExpenseListFitlers from "./ExpenseListFilters";

export const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFitlers />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
