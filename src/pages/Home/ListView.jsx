import React from "react";
import { Col, Row } from "antd";
import "./Home.scss";
import ProductList from "../../container/ProductList/ProductList";
import { images } from "../../config/images";

const ListView = () => {
  return (
    <div className="list-content">
      <Row className="border-bottom-1">
        <Col span={8}>
          <p className="subtitle14 sub-title-secondary-text">Company</p>
        </Col>
        <Col>
          <p className="subtitle14 sub-title-secondary-text">Specialist</p>
        </Col>
      </Row>
      <ProductList
        logo={{ src: images.productAvatarImg, alt: "logo" }}
        meta1={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductList
        logo={{ src: images.productAvatarImg1, alt: "logo" }}
        meta1={{
          title: "Impekable",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductList
        logo={{ src: images.productAvatarImg, alt: "logo" }}
        meta1={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductList
        logo={{ src: images.productAvatarImg1, alt: "logo" }}
        meta1={{
          title: "Impekable",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductList
        logo={{ src: images.productAvatarImg1, alt: "logo" }}
        meta1={{
          title: "Impekable",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
    </div>
  );
};

export default ListView;
