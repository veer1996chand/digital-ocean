import { Menu } from "antd";
import React from "react";
import "./HeaderMenu.scss";
import { useNavigate } from "react-router-dom";
const headerItems = [
  {
    key: "Product",
    path: "/product",
    label: "Product",
  },
  {
    key: "part-2",
    path: "#part-2",
    label: "Solutions",
  },
  {
    key: "part-3",
    path: "#part-3",
    label: "Marketplace",
  },
  {
    key: "part-4",
    path: "#part-4",
    label: "Community",
  },
  {
    key: "part-5",
    path: "#part-5",
    label: "Partners",
  },
  {
    key: "part-6",
    path: "#part-6",
    label: "Pricing",
  },
];

const HeaderMenu = ({ theme }) => {
  let navigate = useNavigate();

  const navToPath = ({ item, key, keyPath, domEvent }) => {
    const { props } = item || {};
    const { path } = props || {};
    navigate(path);
  };

  return (
    <div className="header-menu">
      <Menu
        theme={theme}
        mode="horizontal"
        items={headerItems}
        onClick={navToPath}
        inlineCollapsed={false}
      />
    </div>
  );
};

export default HeaderMenu;
