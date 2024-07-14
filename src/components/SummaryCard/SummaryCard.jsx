import Card from "antd/es/card/Card";
import React from "react";
import "./summarycard.css";
import { Col, Flex } from "antd";
import Avatar from "antd/es/avatar/avatar";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Link } from "react-router-dom";
const SummaryCard = ({ name=null, value=null, icon=null, bg=null, link=null}) => {
  return (
    <Link to={link} >
    <Card className={`summary-card ${bg ? bg : null}`}>
      <Flex className="summary-card-content" gap={2} justify="s" align="center">
        <Col>
          <Avatar shape="square" className="w-16 h-16 " icon={icon}/>
        </Col>
        <Col className="summary-card-typology">
          <Title level={4} className="summary-card-count">{value}</Title>
          <Paragraph className="summary-card-label">{name}</Paragraph>
        </Col>
      </Flex>
    </Card>
    </Link>
  );
};

export default SummaryCard;
