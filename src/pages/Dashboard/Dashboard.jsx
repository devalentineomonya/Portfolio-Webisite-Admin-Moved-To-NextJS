import Card from "antd/es/card/Card";
import React from "react";
import "./dashboard.css";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import {
  FaHandshake,
  FaCertificate,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";

const Dashboard = () => {
  const summaryCardItems = [
    {
      name: "Users",
      value: 20,
      icon: <FaUser size={36} />,
      bg: "bg-indigo-500",
      link:"/users"
    },
    {
      name: "Collaborations",
      value: 20,
      icon: <FaHandshake size={36} />,
      bg: "bg-green-400",
      link:"/collaborations"
    },
    {
      name: "Certificates",
      value: 20,
      icon: <FaCertificate size={36} />,
      bg: "bg-yellow-400",
      link:"/certifications"
    },
    {
      name: "Projects",
      value: 20,
      icon: <FaProjectDiagram size={36} />,
      bg: "bg-sky-500",
      link: "/projects"
    },
  ];

  return (
    <div className="dashboard-container">
      <Card className="dashboard-content">
        <div className="dashboard-summary-cards ">
          {summaryCardItems?.map((summaryCardItem, index) => (
            <SummaryCard
              {...summaryCardItem}
              key={`${index}-${summaryCardItem.name}`}
            />
          ))}
        </div>
        <Card className="recent-activities">ss</Card>
      </Card>
    </div>
  );
};

export default Dashboard;
