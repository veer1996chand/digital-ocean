import React from "react";
import { Checkbox as AntdCheckbox } from "antd";
import "./Checkbox.scss";
const Checkbox = ({ children, value, ...rest }) => {
  return (
    <AntdCheckbox value={value} {...rest}>
      {children}
    </AntdCheckbox>
  );
};

export default Checkbox;
