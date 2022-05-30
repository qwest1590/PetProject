import React from "react";
import "./Category.css";
//@ts-ignore
import food from "../icons/food.svg";
//@ts-ignore
import ruble from "../icons/rub.svg";
export interface ICategoryProps {
  readonly id: number;
  name: string;
  color: string;
  icon: string;
  value: number;
}
export default function Category({
  id,
  name,
  color,
  icon,
  value,
}: ICategoryProps) {
  return (
    <div className="wrapper">
      <h3 className="name">
        {name} {id}
      </h3>
      <div className="circleWithIcon" style={{ background: color }}>
        <img className="icon" src={icon === "food" ? food : ruble} alt=""></img>
      </div>
      <span className="categoryValue">{value}</span>
    </div>
  );
}
