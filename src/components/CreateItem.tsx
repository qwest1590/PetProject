import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backGroundImage from "../images/incomesBackground.jpg";
import { icons } from "../icons/icons";
import { useAppDispatch, useAppSelector } from "..";
import { addIncomeItem } from "../redux/actions";

const CreateItemWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  background-size: cover;
`;
const Btn = styled.button`
  height: 75px;
  width: 60px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 500px;
  margin: auto;
  input {
    margin-top: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 2rem;
    text-align: center;
    background-color: lightblue;
    &::placeholder {
      text-align: center;
    }
    &:focus {
      background-color: wheat;
    }
    &::-webkit-inner-spin-button {
      display: none;
    }
  }
  label {
    font-size: 4rem;
    cursor: pointer;
    padding: 10px 20px;
  }
  span {
    width: 30px;
    display: inline-block;
    font-size: 2.2rem;
    padding-left: 5px;
  }
`;

const HiddenRadio = styled.input`
  display: none;
`;

const ToggleDiv = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  background-color: #239292;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  margin-top: 50px;
  align-self: center;
`;

const ChooseIconButton = styled.button`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  background-color: #116874;
  color: #29df81;
  cursor: pointer;
  position: absolute;
  right: 100px;
  margin-top: 15px;
`;

const Label = styled.label`
  transition: all 0.5s linear;
`;

const Icon = styled.img`
  width: 75px;
  height: 75px;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
`;
const IconStore = styled.div`
  opacity: 0;
  width: 550px;
  height: 400px;
  background-color: #b0e6e3;
  position: relative;
  margin: auto;
  margin-top: -300px;
  border-radius: 20px;
  transition: all 0.7s linear;
`;

export interface IcreateItemProps {
  categoryFolder: string;
}

export const CreateItem = ({ categoryFolder }: IcreateItemProps) => {
  const nextId = useAppSelector((state) => state.categories.income.length);
  const [iconStoreIsOpen, setIconStorIsOpen] = useState(false);
  const [categoryForCreate, setCategoryForCreate] = useState({
    name: "",
    icon: "",
    value: 0,
    currency: "Ruble",
    id: nextId,
  });

  const dispatch = useAppDispatch();
  const delaultIcon = icons[8];

  const changeCurrency = (s: string) => {
    if (s === "Dollar") {
      setCategoryForCreate({ ...categoryForCreate, currency: "Dollar" });
    } else setCategoryForCreate({ ...categoryForCreate, currency: "Ruble" });
  };

  const onSubmitHandler = () => {
    if (categoryForCreate.icon === "") {
      dispatch(addIncomeItem({ ...categoryForCreate, icon: delaultIcon }));
    } else {
      dispatch(addIncomeItem({ ...categoryForCreate }));
    }
  };

  const navigate = useNavigate();

  return (
    <CreateItemWrapper style={{ backgroundImage: `url(${backGroundImage})` }}>
      <Btn type="button" style={{ marginLeft: "40px", marginTop: "55px" }}>
        <Link
          style={{ textDecoration: "none", color: "black", opacity: 0.7 }}
          to={"/"}
        >
          X
        </Link>
      </Btn>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
          navigate("/");
        }}
      >
        <input
          type={"text"}
          placeholder=" Введите Название"
          required
          onChange={(e) =>
            setCategoryForCreate({ ...categoryForCreate, name: e.target.value })
          }
        ></input>
        <div style={{ alignSelf: "center" }}>
          {" "}
          <input
            type={"number"}
            placeholder=" Планирую получать"
            max={99999999}
            required
            onChange={(e) =>
              setCategoryForCreate({
                ...categoryForCreate,
                value: +e.target.value,
              })
            }
          ></input>
          <span>
            {categoryForCreate.currency === "Ruble" ? "\u20bd" : "\u0024"}
          </span>
        </div>
        <ToggleDiv>
          <Label
            onClick={() => changeCurrency("Ruble")}
            style={
              categoryForCreate.currency === "Ruble"
                ? { color: "lightgreen" }
                : { color: "black" }
            }
          >
            &#x20bd;
            <HiddenRadio
              type={"radio"}
              value="dollar"
              name="dollar"
            ></HiddenRadio>
          </Label>
          <Label
            onClick={() => changeCurrency("Dollar")}
            style={
              categoryForCreate.currency === "Dollar"
                ? { color: "lightgreen" }
                : { color: "black" }
            }
          >
            &#36;
            <HiddenRadio
              type={"radio"}
              value="ruble"
              name="ruble"
            ></HiddenRadio>
          </Label>
        </ToggleDiv>

        <Btn
          type="submit"
          style={{
            position: "absolute",
            right: "50px",
            top: "55px",
          }}
        >
          &#10003;
        </Btn>
      </Form>
      <ChooseIconButton
        type="button"
        onClick={() => setIconStorIsOpen(!iconStoreIsOpen)}
      >
        {categoryForCreate.icon ? (
          <img
            style={{ width: "50px", height: "50px" }}
            src={categoryForCreate.icon}
            alt={categoryForCreate.icon}
          ></img>
        ) : (
          "Иконка"
        )}
      </ChooseIconButton>
      <IconStore
        style={
          iconStoreIsOpen
            ? { opacity: 1 }
            : { opacity: 0, visibility: "hidden" }
        }
      >
        {icons.map((icon) => (
          <Icon
            key={icon}
            alt="'"
            src={icon}
            onClick={() => {
              setCategoryForCreate({ ...categoryForCreate, icon: icon });
              setIconStorIsOpen(false);
            }}
          ></Icon>
        ))}
      </IconStore>
    </CreateItemWrapper>
  );
};
