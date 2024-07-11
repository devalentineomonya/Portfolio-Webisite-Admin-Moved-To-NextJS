import Title from "antd/es/typography/Title";
import React from "react";
import "./asidenavigation.css";
import { Divider } from "antd";

const AsideNavigation = () => {
  return (
    <div>
      <Title type="success" level={5} className="aside-title">
        Devalentine Admin Dashboard
      </Title>
      <Divider className="aside-title-separator" />
    </div>
  );
};

export default AsideNavigation;
