import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";
import { useParams, useNavigate } from "react-router-dom";

const EditExpensePage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onSubmit = (expense) => {
    props.editExpense(id, expense);
    navigate('/');
  };

  const onRemove = () => {
    props.startRemoveExpense({ id });
    navigate('/');
  };

  const expense = props.expenses.find((expense) => expense.id === id);

  return (
    <div>
      <ExpenseForm onSubmit={onSubmit} expense={expense} />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
