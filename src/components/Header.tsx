import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="burgerMenu">Burger Menu</div>
      <div className="totals-wrapper">
        <div className="totals">
          <span>Баланс</span> <span>{1}</span>
        </div>
        <div className="totals">
          <span>Расходы</span> <span>{1}</span>
        </div>
        <div className="totals">
          <span>В Планах</span> <span>{1}</span>
        </div>
      </div>
      <div className="something">Something</div>
    </div>
  );
};
export default Header;
