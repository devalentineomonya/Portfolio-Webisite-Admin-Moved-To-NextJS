import React, { useState } from "react";
import { Form, Button, message } from "antd";
import usersForm from "../../assets/Data/UsersForm";
import axios from "axios";
import UserForm from "./UserForm";
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("password", values.password);
    if (values.image) {
      formData.append("image", values.image[0].originFileObj);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjVhZTVlNTRhNDJiNWVkYjA3MjFjOSIsImlhdCI6MTcyMDk4MjU4MH0.FeKVqg0VReZg85DVuA6RLFFkKlkr5j9gb6r3mWfg77A",
          },
        }
      );
      message.success(response.data.message);
      form.resetFields();
      navigate('/users'); 
    } catch (error) {
      message.error(error.response.data.message.replaceAll('"', ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserForm>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        size="large"
        className="w-full"
      >
        {usersForm?.map(
          ({
            name,
            label,
            rules,
            component,
            valuePropName,
            getValueFromEvent,
            extra,
          }) => (
            <Form.Item
              key={name}
              name={name}
              label={label}
              rules={rules}
              valuePropName={valuePropName}
              getValueFromEvent={getValueFromEvent}
              extra={extra}
            >
              {component}
            </Form.Item>
          )
        )}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        
        </Form.Item>
      </Form>
    </UserForm>
  );
};

export default AddUserForm;
