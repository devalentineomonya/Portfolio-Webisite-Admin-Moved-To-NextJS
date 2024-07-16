import React from "react";
import UsersTable from "../../components/UsersTable/UsersTable";
import { BiPlus } from "react-icons/bi";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const handleAddUserClick = () => {
    navigate("/users/add");
  };
  return (
    <div className="px-3 bg-white mx-2 mt-3 pt-2">
      <div className="border-b border-gray-100 flex justify-end item-center pb-3 mb-2">
        <Button size="large" onClick={handleAddUserClick}>
          <BiPlus />
          Add User
        </Button>
      </div>

      <UsersTable />
    </div>
  );
};

export default Users;
