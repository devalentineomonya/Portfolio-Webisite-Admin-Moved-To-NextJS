import Card from "antd/es/card/Card";
import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Card>
        <div className="dashboard-summary-cards">
          <Card className="summary-card" />
          <Card className="summary-card" />
          <Card className="summary-card" />
          <Card className="summary-card" />
          <Card className="summary-card" />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
