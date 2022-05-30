import React from "react";
import "./Incomes.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import Category from "./Category";
import { Link } from "react-router-dom";

export const Incomes = () => {
  const incomeItems = useSelector((state: RootState) => state.income.items);
  const dispatch = useDispatch();

  return (
    <div className="incomes-wrapper">
      {incomeItems.length > 0
        ? incomeItems.map((item) => (
            <Category key={item.id} {...item} color={"#fbc02d"} />
          ))
        : null}
      <button className="add-btn">
        <Link className="link" to={"/createIncome"}>
          +
        </Link>
      </button>
    </div>
  );
};
