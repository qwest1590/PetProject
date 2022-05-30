import React from "react";
import "./Header.css";
import styled from "styled-components";
const HeaderWrapper = styled.div`
  display: flex;
  height: 100px;
  background: lightblue;
  align-items: center;
  justify-content: space-around;
`;
const TotalWrapper = styled.div`
  display: flex;
`;
const Totals = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 150px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="burgerMenu">Burger Menu</div>
      <TotalWrapper>
        <Totals>
          <span>Баланс</span> <span>{1}</span>
        </Totals>
        <Totals>
          <span>Расходы</span> <span>{1}</span>
        </Totals>
        <Totals>
          <span>В Планах</span> <span>{1}</span>
        </Totals>
      </TotalWrapper>
      <div>Something</div>
    </HeaderWrapper>
  );
};
export default Header;
