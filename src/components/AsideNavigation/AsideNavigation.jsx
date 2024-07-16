import React from "react";
import "./asidenavigation.css";
import { Menu } from "antd";
import { menuItems } from "../../assets/Data/MenuItems";
import { Link } from "react-router-dom";

const AsideNavigation = () => {
  const items = menuItems.map(({ key, icon, label, link }) => ({
    key,
    icon,
    label: <Link to={link}>{label}</Link>,
  }));

  return (
      <Menu items={items} className="border-2 border-green-400" />
  );
};

export default AsideNavigation;
