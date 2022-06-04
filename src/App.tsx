import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Incomes } from "./components/Incomes";
import { Routes, Route } from "react-router-dom";
import { CreateItem } from "./components/CreateItem";
import { Funds } from "./components/Funds";

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Incomes />
      <Funds />
      <Routes>
        <Route path="/" element="" />
        <Route
          path="/createIncome"
          element={<CreateItem categoryFolder="Income" />}
        />
        <Route
          path="/createFunds"
          element={<CreateItem categoryFolder="Funds" />}
        />
      </Routes>
    </div>
  );
}

export default App;
