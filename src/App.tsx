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
import { Login } from "./components/Login";

const AppWrapper = styled.div``;
// export interface Props {
//   progress: number;
// }

// const CircleWrapper = styled.div`
//   height: 150px;
//   width: 150px;
//   border-radius: 50%;
//   background-color: #47dfdf;
// `;

// const Circle = styled.div`
//   height: 150px;
//   width: 150px;
//   border-radius: 50%;
//   position: absolute;
//   clip: rect(${(p: Props) => p.progress + "px"}, 150px, 150px, 0px);
//   background-color: #1a7ecf;
// `;

function App() {
  return (
    <AppWrapper>
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
        <Route path="/Login" element={<Login />} />
      </Routes>
      {/* <CircleWrapper>
        {" "}
        <Circle progress={70}> </Circle>
      </CircleWrapper> */}
    </AppWrapper>
  );
}

export default App;
