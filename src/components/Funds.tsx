import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "..";
import Category from "./Category";

const FundsWrapper = styled.div`
  height: 200px;
  background-color: #e2f0a6;
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

export const Funds = () => {
  const fundsItems = useAppSelector((state) => state.categories.funds);
  return (
    <FundsWrapper>
      {fundsItems.length > 0
        ? fundsItems.map((item) => (
            <li key={item.id} style={{ listStyle: "none" }}>
              <Category key={item.id} {...item} />{" "}
            </li>
          ))
        : null}
      <AddBtn>
        {" "}
        <Link
          style={{ textDecoration: "none", color: "black", opacity: 0.7 }}
          to={"/createFunds"}
        >
          +
        </Link>
      </AddBtn>
    </FundsWrapper>
  );
};
