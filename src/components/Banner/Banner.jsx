import React from "react";
import "./Banner.scss";
import { images } from "../../config/images";
import "./Banner.scss";
const Banner = ({ children, ...rest }) => {
  return (
    <div className="banner">
      <img src={images.header} alt="Banner" />
    </div>
  );
};

export default Banner;
