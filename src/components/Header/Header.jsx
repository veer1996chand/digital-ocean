import React from "react";
import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./Header.scss";
import Button from "../Button/Button";
const Header = () => {
  return (
    <header className="container">
      <div>
        <Logo />
      </div>
      <div className="heder-menu-items">
        <HeaderMenu />
      </div>
      <div>
        <Button type="text">Log in</Button>
        <Button type="primary">Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
