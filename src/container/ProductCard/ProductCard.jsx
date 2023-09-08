import React from "react";
import Card from "../../components/Card/Card";
import "./ProductCard.scss";

import Meta from "antd/es/card/Meta";
import { Row } from "antd";
import { Link } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
const ProductCard = ({ cover, logo, meta1, meta2 }) => {
  return (
    <Card
      cover={
        <div className="cover-img">
          <img src={`${cover.src}`} alt={cover.alt} />
          <div className="top-left-tag">
            <Tag
              kay={1}
              onClose={() => {}}
              value="Staff picked"
              className="ant-tag-blue-cylindrical ant-tag-small"
            />
          </div>
          {logo?.src && (
            <div className="product-name-logo">
              <div className="img-logo">
                <img src={logo.src} alt={logo.alt} />
              </div>

              <Tag
                kay={1}
                onClose={() => {}}
                value="Cloud Aggregator"
                className="ant-tag-small ant-tag-light-gray cylindrical-coordinate-text"
              />
            </div>
          )}
        </div>
      }
      className="product-card"
    >
      <Row className="normal-meta">
        <Meta title={meta1?.title} description={meta1?.description} />
      </Row>
      <Row className="bottom-wave-meta">
        <Meta title={meta2?.title} description={meta2?.description} />
        <div className="wave-bottom">
          <Link>View More</Link>
        </div>
      </Row>
    </Card>
  );
};

export default ProductCard;
