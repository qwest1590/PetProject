import React from "react";
import styled from "styled-components";

const Name = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 130px;
  height: 135px;
  justify-content: space-between;
`;

const CategoryValue = styled.span`
  font-size: 1.2rem;
`;

const CircleWithIcon = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

export interface ICategoryProps {
  readonly id: number;
  name: string;
  icon: string;
  value: number;
  currency: string;
}

export default function Category({
  id,
  name,
  icon,
  value,
  currency,
}: ICategoryProps) {
  return (
    <Wrapper>
      <Name>
        {name} {id}
      </Name>
      <CircleWithIcon>
        <Icon src={icon} alt=""></Icon>
      </CircleWithIcon>
      <CategoryValue>
        {value} {currency === "Ruble" ? "\u20bd" : "\u0024"}
      </CategoryValue>
    </Wrapper>
  );
}
