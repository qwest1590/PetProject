import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "..";
import image from "../images/login.jpg";
import { loggedIn } from "../redux/actions";

const LoginWrapper = styled.div`
  position: absolute;
  top: 0px;
  z-index: 5;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url(${image});
`;

const LoginForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 500px;
  height: 300px;
  margin: 100px auto;
  align-items: center;
  input {
    height: 50px;
    width: 400px;
    border-radius: 5px;
    border: 1px solid blue;
    background-color: lightblue;
    font-size: 1.4rem;
    padding-left: 10px;
    margin-top: 50px;
    &::placeholder {
      padding-left: 20px;
      font-size: 1rem;
    }
    &:active,
    &:focus {
      background-color: white;
      outline: none;
      border: none;
    }
  }
  button {
    height: 40px;
    width: 200px;
    border-radius: 15px;
    font-size: 1.5rem;
    border: 1px solid blue;
    transition: background-color 0.5s linear;
    margin-top: 30px;
    &:hover {
      background-color: lightgreen;
      cursor: pointer;
    }
    &:focus {
      outline: none;
      border: none;
    }
  }
`;

const WelcomeTitle = styled.h1`
  text-align: center;
  padding-top: 50px;
  margin: 0;
  line-height: 3rem;
  font-size: 2.5rem;
  color: aquamarine;
`;

const Message = styled.p`
  opacity: 0;
  color: #d32406;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  position: absolute;
  transition: opacity 0.5s ease-out;
`;

export const Login = () => {
  const regExp = new RegExp("^admin$", "ig");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState({ username: "", password: "" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inputData.username.match(regExp) && inputData.password.match(regExp)) {
      dispatch(loggedIn(inputData));
      navigate("/");
    } else setModalIsOpen(true);
  };

  return (
    <LoginWrapper>
      <WelcomeTitle>
        Welcome My friend! <br></br> Please,Log In
      </WelcomeTitle>
      <LoginForm>
        <input
          onChange={(e) => {
            setInputData((prevState) => ({
              ...prevState,
              username: e.target.value,
            }));
            setModalIsOpen(false);
          }}
          type={"text"}
          required
          placeholder="Username"
          autoComplete={"on"}
        ></input>
        <input
          onChange={(e) => {
            setInputData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
            setModalIsOpen(false);
          }}
          type={"password"}
          required
          placeholder="Password"
          autoComplete={"on"}
        ></input>
        <Message style={modalIsOpen ? { opacity: 1 } : { opacity: 0 }}>
          Username or Password not Correct,try again
        </Message>
        <button onClick={(e) => onSubmitHandler(e)} type={"submit"}>
          Log In
        </button>
      </LoginForm>
    </LoginWrapper>
  );
};
