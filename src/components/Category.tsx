import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "..";
import {
  deleteExpencesItem,
  deleteFundsItem,
  deleteIncomeItem,
  startedEditItem,
} from "../redux/actions";

const Name = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 130px;
  height: 180px;
  position: relative;
`;

const CategoryValue = styled.div`
  font-size: 1.2rem;
  display: flex;
  width: 100%;
  flex-flow: column;
  text-align: center;
  span {
    font-size: 0.8rem;
  }
`;

const CircleWithIcon = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #dfb0b0;
  margin: 20px 0px 20px 0px;
`;

const Icon = styled.img`
  width: 80px;
  border-radius: 50%;
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  height: 30px;
  width: 30px;
  position: absolute;
  right: 23px;
  top: 92px;
  background-color: lightseagreen;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  &:hover {
    border: 2px solid tomato;
  }
`;

const DeleteButton = styled(EditButton)`
  top: 36px;
`;

export interface ICategoryProps {
  readonly id: number;
  name: string;
  icon: string;
  value: number;
  targetValue: number;
  currency: string;
  category: string;
}

export default function Category({
  id,
  name,
  icon,
  value,
  targetValue,
  currency,
  category,
}: ICategoryProps) {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    switch (category) {
      case "income":
        dispatch(deleteIncomeItem(id));
        break;
      case "funds":
        dispatch(deleteFundsItem(id));
        break;
      case "expences":
        dispatch(deleteExpencesItem(id));
        break;
      default:
        console.log("default");
    }
  };

  return (
    <Wrapper
      onContextMenu={(e) => {
        e.preventDefault();
        setShowButtons(!showButtons);
      }}
    >
      <DeleteButton
        onClick={onClickHandler}
        style={
          showButtons === true
            ? { opacity: 0.8 }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        &#10006;
      </DeleteButton>
      <EditButton
        style={
          showButtons === true
            ? { opacity: 0.8 }
            : { opacity: 0, pointerEvents: "none" }
        }
        onClick={() => {
          dispatch(
            startedEditItem({
              id,
              name,
              icon,
              value,
              targetValue,
              currency,
              category,
            })
          );
          navigate("/categoryEdit");
          setShowButtons(!showButtons);
        }}
      >
        {" "}
        &#9998;
      </EditButton>
      <Name>
        {name} {id}
      </Name>
      <CircleWithIcon>
        <Icon src={icon} alt=""></Icon>
      </CircleWithIcon>
      <CategoryValue>
        {value} {currency === "Ruble" ? "\u20bd" : "\u0024"} <br></br>
        <span>{targetValue !== 0 ? targetValue : null}</span>
      </CategoryValue>
    </Wrapper>
  );
}
