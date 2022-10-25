import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
export default function Expenses(props) {
  let fil = <div className = "expenses-list__fallback">No filter Available</div>;

  const [selected, setSelected] = useState("");
  function saveFilter(selectedfilter) {
    setSelected(selectedfilter);
  }
  const filtered = props.expenses.filter((expen) => {
    return expen.date.getFullYear() === Number(selected);
  });
  if(filtered.length > 0)
    fil = filtered.map((expen) => {
      return <li key={expen.id}> <ExpenseItem expense={expen} /></li>;
  });
  return (
    <Card className="expenses">
      <ExpenseChart data = {filtered}/>
      <ExpensesFilter onSelectFilter={saveFilter} filter={selected} />
      <ul className ="expenses-list">{fil}</ul>  
    </Card>
  );
}
