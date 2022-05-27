import React from "react";
import "./App.css";
import Category from "./components/Category";
import { ICategoryProps } from "./components/Category";

//@ts-ignore
import food from "./icons/food.svg";
//@ts-ignore
import rublesvg from "./icons/rub.svg";
let testI: ICategoryProps = {
  id: 0,
  name: "Доходы",
  color: "none",
  icon: food,
  value: 5,
  onClick: () => console.log("hello"),
};
let testI2: ICategoryProps = {
  id: 1,
  name: "Расходы",
  color: "none",
  icon: rublesvg,
  value: 225,
  onClick: function () {
    console.log("second");
  },
};

function App() {
  return (
    <div className="App">
      <Category {...testI} />
      <Category {...testI2} />
    </div>
  );
}

export default App;
