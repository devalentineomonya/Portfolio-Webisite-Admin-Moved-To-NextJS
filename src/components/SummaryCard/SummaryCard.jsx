import Card from "antd/es/card/Card";
import React from "react";
import "./summarycard.css";
import { Flex } from "antd";
import Avatar from "antd/es/avatar/avatar";
const SummaryCard = ({ bg = null }) => {
  return (
    <Card className={`summary-card ${bg ? bg : null}`}>
      <Flex className="summary-card-content" gap={2} justify="s" align="center">
        <Flex>
          <Avatar />
        </Flex>
        <Flex>h</Flex>
      </Flex>
    </Card>
  );
};

export default SummaryCard;
