import React from "react";
import { Row, Col } from 'antd';
import "./headercomponent.css";
const HeaderComponent = () => {
  return (
    <Row className="header-container" align="stretch" gutter={16}>
    <Col flex="230px" className="header-left">
      <Row justify="space-between" align="stretch">
        <Col>logo</Col>
        <Col>menu</Col>
      </Row>
    </Col>
    <Col flex="auto" className="header-center">
      Center
    </Col>
    <Col flex="150px" className="header-right" justify="end">
      Right
    </Col>
  </Row>
  );
};

export default HeaderComponent;
