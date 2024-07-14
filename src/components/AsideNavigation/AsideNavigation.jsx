import React from "react";
import "./asidenavigation.css";
import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { menuItems } from "../../assets/Data/MenuItems";
import { Link } from "react-router-dom";

const AsideNavigation = () => {
  return (
    <div>
      <Menu>
        {menuItems?.map(({icon, name, href:link}, i) => (
          <MenuItem icon={icon} title={name} key={`${i}-${name}`}>
          <Link to={link} >
            {name}
          </Link>
          </MenuItem>
        ))}

      </Menu>
    </div>
  );
};

export default AsideNavigation;
