import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "..";
import { getTodayCurrencyRate } from "../redux/actions";
import styled from "styled-components";
const CurrencyWrapper = styled.div`
  text-align: center;
`;
export const CurrencyRate = () => {
  const dispatch: AppDispatch = useDispatch();
  const usdRate = useAppSelector((state) => state.currencyRate.USD);
  const eurRate = useAppSelector((state) => state.currencyRate.EUR);
  useEffect(() => {
    dispatch(getTodayCurrencyRate());
  }, [dispatch]);
  return (
    <CurrencyWrapper>
      Курсы Валют по ЦБ : <br></br>
      &#36;{usdRate ? usdRate : null} / &#8364;
      {eurRate ? eurRate : null}
    </CurrencyWrapper>
  );
};
