import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  function handleGetting(newExpense) {
    props.onGet(newExpense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onGetting={handleGetting} />
    </div>
  );
}
