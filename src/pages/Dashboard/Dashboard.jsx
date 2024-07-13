import Card from "antd/es/card/Card";
import React from "react";
import "./dashboard.css";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Card className="dashboard-content">
        <div className="dashboard-summary-cards">
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
        </div>
      <Card className="recent-activities">ss</Card>
 
      </Card>
    </div>
  );
};

export default Dashboard;
