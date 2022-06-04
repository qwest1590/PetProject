import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "..";
import Category from "./Category";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IncomesWrapper = styled.div`
  height: 200px;
  background-color: aquamarine;
  display: flex;
  align-items: center;
`;
const AddBtn = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: none;
  opacity: 0.7;
  font-size: 4.5rem;
  cursor: pointer;
  margin-left: 10px;
`;

export const Incomes = () => {
  const incomeItems = useAppSelector((state) => state.income.items);
  const dispatch = useDispatch();

  return (
    <IncomesWrapper>
      {incomeItems.length > 0
        ? incomeItems.map((item) => (
            <li key={item.id} style={{ listStyle: "none" }}>
              <Category key={item.id} {...item} />{" "}
            </li>
          ))
        : null}
      <AddBtn>
        <Link
          style={{ textDecoration: "none", color: "black", opacity: 0.7 }}
          to={"/createIncome"}
        >
          +
        </Link>
      </AddBtn>
    </IncomesWrapper>
  );
};
