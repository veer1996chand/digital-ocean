import React from "react";
import { Collapse as AntdCollapse } from "antd";
import "./Collapse.scss";
const Collapse = ({ children, ...rest }) => {
  return <AntdCollapse {...rest}>{children}</AntdCollapse>;
};

export default Collapse;
