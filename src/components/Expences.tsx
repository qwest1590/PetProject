import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "..";
import Category from "./Category";
const ExpencesWrapper = styled.div`
  min-height: 200px;
  background-color: #a9f0f0;
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

export const Expences = () => {
  const expencesItems = useAppSelector((state) => state.categories.expences);
  return (
    <ExpencesWrapper>
      {expencesItems.length > 0
        ? expencesItems.map((item) => (
            <li key={item.id} style={{ listStyle: "none" }}>
              <Category key={item.id} {...item} />{" "}
            </li>
          ))
        : null}
      <AddBtn>
        {" "}
        <Link
          style={{ textDecoration: "none", color: "black", opacity: 0.7 }}
          to={"/createExpences"}
        >
          +
        </Link>
      </AddBtn>
    </ExpencesWrapper>
  );
};
