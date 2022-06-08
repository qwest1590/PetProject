import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Incomes } from "./components/Incomes";
import { Routes, Route } from "react-router-dom";
import { CreateItem } from "./components/CreateItem";
import { Funds } from "./components/Funds";
import { addExpencesItem, addFundsItem, addIncomeItem } from "./redux/actions";
import { Expences } from "./components/Expences";
import incomesBackground from "../src/images/incomesBackground.jpg";
import fundsBackground from "../src/images/fundsBackground.jpg";
import expencesBackground from "../src/images/expencesBackground.jpg";
import { CategoryEditor } from "./components/CategoryEditor";
import styled from "styled-components";

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
            <CreateItem
              categoryFolder="income"
              addFunc={addIncomeItem}
              backgroundImage={incomesBackground}
            />
          }
        />
        <Route
          path="/createFunds"
          element={
            <CreateItem
              categoryFolder="funds"
              addFunc={addFundsItem}
              backgroundImage={fundsBackground}
            />
          }
        />
        <Route
          path="/createExpences"
          element={
            <CreateItem
              categoryFolder="expences"
              addFunc={addExpencesItem}
              backgroundImage={expencesBackground}
            />
          }
        />
        <Route path="/categoryEdit" element={<CategoryEditor />} />
      </Routes>
    </div>
  );
}

export default App;
