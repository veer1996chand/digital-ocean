import React from "react";
import "./ProductList.scss";

import { Avatar, Col, Row } from "antd";
import Tag from "../../components/Tag/Tag";
import { Link } from "react-router-dom";
const ProductList = ({ logo, meta1 }) => {
  return (
    <Row className="product-list border-bottom-1-light">
      <Col span={8} className="left-side">
        <Avatar icon={<img src={logo.src} />} size="large" gap={[1]} />
        <Link to={"/product/1"}>
          <h5>{meta1.title}</h5>
        </Link>
      </Col>
      <Col>
        <p className="grey-light-text">{meta1.description}</p>
        <Tag
          kay={1}
          onClose={() => {}}
          value="Analytics"
          className="ant-tag-small ant-tag-light-gray cylindrical-coordinate-text"
        />
        <Tag
          kay={1}
          onClose={() => {}}
          value="Big data"
          className="ant-tag-small ant-tag-light-gray cylindrical-coordinate-text"
        />
        <Tag
          kay={1}
          onClose={() => {}}
          value="Financial"
          className="ant-tag-small ant-tag-light-gray cylindrical-coordinate-text"
        />
        <Tag
          kay={1}
          onClose={() => {}}
          value="Developer"
          className="ant-tag-small ant-tag-light-gray cylindrical-coordinate-text"
        />
      </Col>
    </Row>
  );
};

export default ProductList;
