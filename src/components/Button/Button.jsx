import React from "react";
import { Button as AntdButton } from "antd";
import "./Button.scss";
const Button = ({ children, ...rest }) => {
  return <AntdButton {...rest}>{children}</AntdButton>;
};

export default Button;
