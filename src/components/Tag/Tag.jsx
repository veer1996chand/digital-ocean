import React from "react";
import { Tag as AntdTag } from "antd";
import "./Tag.scss";
const Tag = ({ value, closable, onClose = () => {}, className, ...rest }) => {
  return (
    <AntdTag
      closeIcon={closable}
      onClose={onClose}
      className={className}
      {...rest}
    >
      {value}
    </AntdTag>
  );
};

export default Tag;
