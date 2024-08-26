import React, { useEffect } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpensesListItem";
import selectExpensese from "../selectors/expenses";

const ExpenseList = (props) => {

  useEffect(() =>{
    console.log(props)
  }, [props]);

  return (
  <div>
    {props.expenses.length < 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
)};  

const MapStateToProps = (state) => {
  return {
    expenses: selectExpensese(state.expenses, state.filters),
  };
};

export default connect(MapStateToProps)(ExpenseList);
