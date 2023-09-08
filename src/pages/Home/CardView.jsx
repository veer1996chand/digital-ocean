import React from "react";
import { Row } from "antd";
import "./Home.scss";
import { images } from "../../config/images";
import ProductCard from "../../container/ProductCard/ProductCard";

const CardView = () => {
  return (
    <Row className="card-content">
      <ProductCard
        cover={{ src: images.header, alt: "specialist img" }}
        logo={{ src: images.productAvatarImg, alt: "logo" }}
        meta1={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
        meta2={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductCard
        cover={{ src: images.header, alt: "specialist img" }}
        meta1={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
        meta2={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductCard
        cover={{ src: images.header, alt: "specialist img" }}
        logo={{ src: images.productAvatarImg1, alt: "logo" }}
        meta1={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
        meta2={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductCard
        cover={{ src: images.header, alt: "specialist img" }}
        logo={{ src: images.productAvatarImg, alt: "logo" }}
        meta1={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
        meta2={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
      <ProductCard
        cover={{ src: images.header, alt: "specialist img" }}
        meta1={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
        meta2={{
          title: "Mastodon",
          description:
            "Mastodon is free and open-source software that provides instant global communication.",
        }}
      />
    </Row>
  );
};

export default CardView;
