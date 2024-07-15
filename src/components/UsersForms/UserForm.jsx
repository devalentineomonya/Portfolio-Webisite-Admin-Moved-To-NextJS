import React from "react";
import { Card } from "antd";
import "./userform.css";
const UserForm = ({ children }) => {
  return (
    <Card className="user-form-container">
      <Card className="user-form-content">{children}</Card>
    </Card>
  );
};

export default UserForm;
