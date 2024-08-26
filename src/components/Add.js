import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log(expense);
    this.props.addExpense(expense);
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  
  addExpense: (expense) => {
    console.log("expense",expense);
    console.log('dispatch',dispatch)
    dispatch(addExpense(expense))
  }
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
