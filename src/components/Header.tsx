import React from "react";
import styled, { css } from "styled-components";
import { useAppSelector } from "..";
import { BurgerMenu } from "./BurgerMenu";
import { CurrencyRate } from "./CurrencyRate";

const flexAndCenter = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HeaderWrapper = styled.div`
  ${flexAndCenter}
  height: 100px;
  background: lightblue;
  align-items: center;
  justify-content: space-around;
`;

const TotalWrapper = styled.div`
  display: flex;
`;

const Totals = styled.div`
  ${flexAndCenter}
  flex-flow: column;
  height: 80px;
  width: 150px;
`;

const Header = () => {
  const balanceTotal = useAppSelector((state) =>
    state.categories.funds
      .map((item) => item.value)
      .reduce((prev, cur) => prev + cur, 0)
  );
  const expencesTotal = useAppSelector((state) =>
    state.categories.expences
      .map((item) => item.value)
      .reduce((prev, cur) => prev + cur, 0)
  );

  return (
    <HeaderWrapper>
      <BurgerMenu></BurgerMenu>
      <TotalWrapper>
        <Totals>
          <span>Баланс</span> <span>{balanceTotal}</span>
        </Totals>
        <Totals>
          <span>Расходы</span> <span>{expencesTotal}</span>
        </Totals>
        <Totals>
          <span>В Планах</span> <span>{1}</span>
        </Totals>
      </TotalWrapper>
      <CurrencyRate />
    </HeaderWrapper>
  );
};
export default Header;
