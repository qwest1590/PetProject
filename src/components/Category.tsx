import React from "react";
import "./Category.css";
export interface ICategoryProps {
  id: number;
  name: string;
  color: string;
  icon: string;
  value: number;
  onClick(words: any): void;
}
export default function Category({
  id,
  name,
  color,
  icon,
  value,
  onClick,
}: ICategoryProps) {
  return (
    <div className="wrapper">
      <h3 className="name">{name}</h3>
      <div
        onClick={onClick}
        className="circleWithIcon"
        style={{ background: color }}
      >
        <img className="icon" src={icon} alt=""></img>
      </div>
      <span className="categoryValue">{value}</span>
    </div>
  );
}
