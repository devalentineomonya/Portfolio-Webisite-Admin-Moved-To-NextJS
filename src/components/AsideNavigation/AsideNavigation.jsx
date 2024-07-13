import React from "react";
import "./asidenavigation.css";
import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { menuItems } from "../../assets/Data/MenuItems";

const AsideNavigation = () => {
  return (
    <div>
      <Menu>
        {menuItems?.map(({icon, name}, i) => (
          <MenuItem color="#fff000" icon={icon} title={name} key={`${i}-${name}`}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AsideNavigation;
