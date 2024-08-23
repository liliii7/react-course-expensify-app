import React from "react";
import { connect } from "react-redux";
import filters from "../reducers/filters";
import ExpenseListItem from "./ExpensesListItem";
import selectExpensese from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}

    {}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpensese(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
