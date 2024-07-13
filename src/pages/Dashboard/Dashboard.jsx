import Card from "antd/es/card/Card";
import React from "react";
import "./dashboard.css";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Card className="dashboard-content">
        <div className="dashboard-summary-cards ">
          <SummaryCard bg="bg-indigo-500" />
          <SummaryCard bg="bg-green-400" />
          <SummaryCard bg="bg-yellow-300" />
          <SummaryCard  bg="bg-sky-500"/>
        </div>
      <Card className="recent-activities">ss</Card>
 
      </Card>
    </div>
  );
};

export default Dashboard;
