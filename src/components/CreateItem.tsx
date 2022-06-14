import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { icons } from "../icons/icons";
import { useAppDispatch, useAppSelector } from "..";

const CreateItemWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  background-size: cover;
`;
export const Btn = styled.button`
  height: 75px;
  width: 60px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-flow: column;
  margin: auto;
  width: 500px;
  input {
    width: 500px;
    margin-top: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.8rem;
    text-align: center;
    background-color: lightblue;
    &::placeholder {
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
    font-size: 3rem;
    position: absolute;
    top: 46px;
    right: 10px;
  }
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const ToggleDiv = styled.div`
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

export const ChooseIconButton = styled.button`
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

export const Label = styled.label`
  transition: all 0.5s linear;
`;

export const Icon = styled.img`
  width: 75px;
  height: 75px;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
`;
export const IconStore = styled.div`
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
  addFunc: Function;
  backgroundImage: string;
}

export const CreateItem = ({
  categoryFolder,
  addFunc,
  backgroundImage,
}: IcreateItemProps) => {
  const nextId = useAppSelector((state) => state.categories.nextId);
  const [iconStoreIsOpen, setIconStoreIsOpen] = useState(false);
  const [categoryForCreate, setCategoryForCreate] = useState({
    id: nextId,
    name: "",
    icon: "",
    value: 0,
    targetValue: 0,
    currency: "Ruble",
    category: categoryFolder,
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
      dispatch(addFunc({ ...categoryForCreate, icon: delaultIcon }));
    } else {
      dispatch(addFunc({ ...categoryForCreate }));
    }
  };

  const navigate = useNavigate();

  return (
    <CreateItemWrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
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
          maxLength={14}
          required
          onChange={(e) =>
            setCategoryForCreate({ ...categoryForCreate, name: e.target.value })
          }
        ></input>
        <div style={{ alignSelf: "center", position: "relative" }}>
          {" "}
          <input
            type={"number"}
            placeholder={
              categoryFolder === "income"
                ? " Планирую получать в месяц"
                : categoryFolder === "funds"
                ? "Остаток на счете"
                : "Планирую тратить в месяц"
            }
            max={99999999}
            required={
              categoryFolder === "Income" || categoryFolder === "Funds"
                ? true
                : false
            }
            onChange={(e) =>
              categoryFolder === "expences"
                ? setCategoryForCreate({
                    ...categoryForCreate,
                    targetValue: +e.target.value,
                  })
                : setCategoryForCreate({
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
        onClick={() => setIconStoreIsOpen(!iconStoreIsOpen)}
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
              setIconStoreIsOpen(false);
            }}
          ></Icon>
        ))}
      </IconStore>
    </CreateItemWrapper>
  );
};
