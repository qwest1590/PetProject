import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Incomes } from "./components/Incomes";
import { Routes, Route } from "react-router-dom";
import { CreateItem } from "./components/CreateItem";

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Incomes />
      <Routes>
        <Route path="/" element="" />
        <Route path="/createIncome" element={<CreateItem />} />
      </Routes>
    </div>
  );
}

export default App;
