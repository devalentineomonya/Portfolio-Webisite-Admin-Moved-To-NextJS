import { Divider, Flex } from "antd";
import React from "react";
import "./headercomponent.css";
const HeaderComponent = () => {
  return (
    <Flex className="header-container" align="stretch" gap={5}>
      <Flex className="header-left" justify="left"  align="stretch">
        logo
        menu
      </Flex>
      <Flex>Center</Flex>
      <Flex justify="right">Right</Flex>
    </Flex>
  );
};

export default HeaderComponent;
