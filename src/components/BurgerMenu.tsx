import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../redux/actions";
import { useAppSelector } from "..";
const Bar = styled.span`
  display: block;
  width: 50px;
  height: 5px;
  background-color: #000000;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
const MenuButton = styled.button`
  height: 60px;
  width: 60px;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  &:hover {
    span:nth-of-type(1) {
      width: 33px;
    }
    span:nth-of-type(3) {
      width: 33px;
    }
  }
  &:focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(15px, 15px);
      width: 50px;
    }
    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }
    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(14px, -14px);
      width: 50px;
    }
  }
`;

const SideMenu = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 400px;
  position: absolute;
  top: 100px;
  left: 0px;
  bottom: 0px;
  z-index: 2;
  width: 300px;
  background-color: #3148ce;
  transform: translateX(-100%);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  &.active {
    transform: translateX(0);
  }
`;

const NavLink = styled(Link)`
  list-style: none;
  padding: 5px 0px 5px 20px;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  transition: background-color 0.5s linear;
  &:hover {
    background-color: lightgrey;
  }
`;

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useAppSelector((state) => state.app.burgerIsOpen);
  const onClickHandler = () => {
    dispatch(toggleBurgerMenu());
  };
  return (
    <div>
      <MenuButton className={isOpen ? "active" : ""} onClick={onClickHandler}>
        <Bar />
        <Bar />
        <Bar />
      </MenuButton>
      <SideMenu className={isOpen ? "active" : ""}>
        <NavLink onClick={onClickHandler} to={"/Lenta"}>
          {" "}
          Лента Событий
        </NavLink>
        <NavLink onClick={onClickHandler} to={"/OverAll"}>
          Отчеты
        </NavLink>
        <NavLink onClick={onClickHandler} to={"/Diagram"}>
          Диаграмы
        </NavLink>
        <NavLink onClick={onClickHandler} to={"/Settings"}>
          Настройки
        </NavLink>
        <NavLink onClick={onClickHandler} to={"/LogIn"}>
          Выйти
        </NavLink>
      </SideMenu>
    </div>
  );
};
