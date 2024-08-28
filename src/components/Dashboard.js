import React from "react";
import ExpenseList from "./ExpensesList";
import ExpenseListFitlers from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
export const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFitlers />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
