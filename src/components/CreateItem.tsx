import React, { useRef } from "react";
import "./CreateItem.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const CreateItem = () => {
  const navigate = useNavigate();
  const select: any = useRef();

  // const onClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
  //   dispatch({
  //     type: "ADD_INCOME_ITEM",
  //     payload: {
  //       id: incomeItems.length,
  //       name: "Нак",
  //       icon: "ruble",
  //       value: 555,
  //     },
  //   });
  // };
  return (
    <div className="createItem-wrapper">
      <button type="button" className="exit btn">
        <Link className="link" to={"/"}>
          X
        </Link>
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <input
          type={"text"}
          style={{ marginTop: "20px" }}
          placeholder="Введите Название"
          required
        ></input>
        <input type={"text"} placeholder="Планирую получать" required></input>
        <select ref={select}>
          <option>Рубль</option>
          <option>Валюта</option>
        </select>
        <button
          className="confirm btn"
          type="submit"
          onClick={() => {
            console.log(select.current.value);
          }}
        >
          &#10003;
        </button>
      </form>
    </div>
  );
};
