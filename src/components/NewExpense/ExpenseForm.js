import "./ExpenseForm.css";
import React, { useState } from "react";
export default function ExpenseForm(props) {
  const [t, setT] = useState(0);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const handleAdd = (event) => {
    event.preventDefault();
    console.log(event.target);
    const newExpense = {
      title: title,
      amount: Number(amount),
      date: new Date(date),
    };
    props.onGetting(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
    setT(0);
  };
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleAmountChange(event) {
    setAmount(event.target.value);
  }
  function handleDateChange(event) {
    setDate(event.target.value);
  }
  function handleAddingnew(event){
    event.preventDefault();
    setT(1);
  }
  function handleCancel(event){
    event.preventDefault();
    setT(0);
  }
  if (t === 0) {
    return <div>
      <button type = "button" onClick = {handleAddingnew}>Add New Expense</button>
    </div>;
  }

  return (
    <form onSubmit={handleAdd}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>{" "}
          <input type="text" value={title} onChange={handleTitleChange}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={handleAmountChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
            onChange={handleDateChange}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick ={handleCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
