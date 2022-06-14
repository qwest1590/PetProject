import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "..";
import editBackground from "../images/editBackground.jpg";
import { icons } from "../icons/icons";
import {
  Form,
  ToggleDiv,
  Label,
  Btn,
  HiddenRadio,
  Icon,
  IconStore,
  ChooseIconButton,
} from "./CreateItem";
import { Link, useNavigate } from "react-router-dom";
import {
  finishedEditExpencesItem,
  finishedEditFundsItem,
  finishedEditIncomeItem,
} from "../redux/actions";

const EditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color: #e9f5dc;
  background-size: cover;
`;

export const CategoryEditor = () => {
  const [iconStoreIsOpen, setIconStorIsOpen] = useState(false);
  const { id, name, icon, value, targetValue, currency, category } =
    useAppSelector((state) => state.categories.itemOnEdit);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [itemForEdit, setItemForEdit] = useState({
    id,
    name,
    icon,
    value,
    targetValue,
    currency,
    category,
  });

  const changeCurrency = (s: string) => {
    if (s === "Dollar") {
      setItemForEdit({ ...itemForEdit, currency: "Dollar" });
    } else setItemForEdit({ ...itemForEdit, currency: "Ruble" });
  };

  const onSubmitHandler = () => {
    switch (itemForEdit.category) {
      case "income":
        dispatch(finishedEditIncomeItem(itemForEdit));
        break;
      case "funds":
        dispatch(finishedEditFundsItem(itemForEdit));
        break;
      case "expences":
        dispatch(finishedEditExpencesItem(itemForEdit));
        break;
      default:
        console.log("default");
    }
  };
  return (
    <EditorWrapper style={{ backgroundImage: `url(${editBackground})` }}>
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
          placeholder={name}
          required
          onChange={(e) =>
            setItemForEdit({ ...itemForEdit, name: e.target.value })
          }
        ></input>
        <div style={{ alignSelf: "center", position: "relative" }}>
          {" "}
          <input
            type={"number"}
            placeholder={value}
            max={99999999}
            required={
              category === "Income" || category === "Funds" ? true : false
            }
            onChange={(e) =>
              category === "expences"
                ? setItemForEdit({
                    ...itemForEdit,
                    targetValue: +e.target.value,
                  })
                : setItemForEdit({
                    ...itemForEdit,
                    value: +e.target.value,
                  })
            }
          ></input>
          <span>{itemForEdit.currency === "Ruble" ? "\u20bd" : "\u0024"}</span>
        </div>
        <ToggleDiv>
          <Label
            onClick={() => changeCurrency("Ruble")}
            style={
              itemForEdit.currency === "Ruble"
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
              itemForEdit.currency === "Dollar"
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
        {itemForEdit.icon ? (
          <img
            style={{ width: "50px", height: "50px" }}
            src={itemForEdit.icon}
            alt={itemForEdit.icon}
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
              setItemForEdit({ ...itemForEdit, icon: icon });
              setIconStorIsOpen(false);
            }}
          ></Icon>
        ))}
      </IconStore>
    </EditorWrapper>
  );
};
