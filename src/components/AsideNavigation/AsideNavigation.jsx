import React from "react";
import "./asidenavigation.css";
import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { menuItems } from "../../assets/Data/MenuItems";

const AsideNavigation = () => {
  return (
    <div>
      <Menu>
        {menuItems?.map((menuItem, i) => (
          <MenuItem color="#fff000" icon={menuItem.icon} title={menuItem.name} key={`${i}-${menuItem.name}` }>
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AsideNavigation;
