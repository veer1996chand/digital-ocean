import React from "react";
import { ReactComponent as LogoImg } from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <LogoImg />
      </Link>
    </div>
  );
};

export default Logo;
