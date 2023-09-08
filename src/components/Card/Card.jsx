import React from "react";
import { Card as AntdCard } from "antd";
import "./Card.scss";
const Card = ({ children, cover, ...rest }) => {
  return (
    <AntdCard cover={cover} {...rest}>
      {children}
    </AntdCard>
  );
};

export default Card;
