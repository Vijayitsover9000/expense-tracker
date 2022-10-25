import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenses] = useState(INITIAL_EXPENSE);

  function handleGet(newExpense) {
    const latestExpense = {
      id: Math.random().toString(),
      ...newExpense
    };
    setExpenses([...expenses,latestExpense]);
    console.log(expenses);
    // console.log(latestExpense);
  }
  return (
    <div>
      <div className="overall-bg"></div>
      <header className="App-header">
        <NewExpense onGet={handleGet} />
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
}

export default App;
