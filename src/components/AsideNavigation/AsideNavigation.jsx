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
    <div>
      <Menu items={items} />
    </div>
  );
};

export default AsideNavigation;
