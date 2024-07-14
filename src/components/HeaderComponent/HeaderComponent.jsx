import React from "react";
import { Row, Col, Badge } from "antd";
import "./headercomponent.css";
import { BiMenu, BiUser } from "react-icons/bi";
import Avatar from "antd/es/avatar/avatar";
import Paragraph from "antd/es/typography/Paragraph";
const HeaderComponent = () => {
  return (
    <Row className="header-container" align="stretch" gutter={16}>
      <Col flex="230px" className="header-left">
        <Row justify="space-between" align="stretch">
          <Col>logo</Col>
          <Col className="menu-icon">
            <BiMenu size={36} className="cursor-pointer" />
          </Col>
        </Row>
      </Col>
      <Col flex="auto" className="header-center">
        <h3>Dashboard</h3>
      </Col>
      <Col flex="180px" className="header-right" justify="end">
        <Badge dot status="processing" text="Active" label="status" />
        <Avatar src="" icon={<BiUser />} />
        <Paragraph className="user-name">Valentine</Paragraph>
      </Col>
    </Row>
  );
};

export default HeaderComponent;
