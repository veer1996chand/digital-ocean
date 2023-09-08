import React from "react";
import { Tag, Checkbox, Collapse } from "antd";

const Product = () => {
  const log = (e) => {
    console.log(e);
  };
  return (
    <div className="product-page">
      <h1>Product</h1>
      <Tag closeIcon onClose={log}>
        FF
      </Tag>
    </div>
  );
};

export default Product;
