import React from "react";
import "./Tags.scss";
import Tag from "../Tag/Tag";
import { Row } from "antd";
const Tags = ({ className = "", title, tags, tagClassName = "" }) => {
  return (
    <div className={`${className}`}>
      <h5>{title}</h5>
      <Row>
        {(tags || []).map((tag, index) => (
          <Tag kay={index} value={tag} className={tagClassName} />
        ))}
      </Row>
    </div>
  );
};
export default Tags;
