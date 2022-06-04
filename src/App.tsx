import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Incomes } from "./components/Incomes";
import { Routes, Route } from "react-router-dom";
import { CreateItem } from "./components/CreateItem";
import { Funds } from "./components/Funds";
import { addExpencesItem, addFundsItem, addIncomeItem } from "./redux/actions";
import { Expences } from "./components/Expences";

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Incomes />
      <Funds />
      <Expences />
      <Routes>
        <Route path="/" element="" />
        <Route
          path="/createIncome"
          element={
            <CreateItem categoryFolder="Income" addfunc={addIncomeItem} />
          }
        />
        <Route
          path="/createFunds"
          element={<CreateItem categoryFolder="Funds" addfunc={addFundsItem} />}
        />
        <Route
          path="/createExpences"
          element={
            <CreateItem categoryFolder="Expences" addfunc={addExpencesItem} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
