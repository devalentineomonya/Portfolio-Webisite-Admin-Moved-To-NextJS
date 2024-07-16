import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Popconfirm, message, Image, Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 20,
    });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [pagination.current]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:8080/api/users/list`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjVhZTVlNTRhNDJiNWVkYjA3MjFjOSIsImlhdCI6MTcyMDk4MjU4MH0.FeKVqg0VReZg85DVuA6RLFFkKlkr5j9gb6r3mWfg77A"
                },
                params: {
                    page: pagination.current,
                    pageSize: pagination.pageSize,
                },
            });
            setUsers(res.data.data);
            setPagination({
                ...pagination,
                total: res.data.count,
            });
        } catch (error) {
            message.error('Failed to fetch users');
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/users/delete/${id}`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjVhZTVlNTRhNDJiNWVkYjA3MjFjOSIsImlhdCI6MTcyMDk4MjU4MH0.FeKVqg0VReZg85DVuA6RLFFkKlkr5j9gb6r3mWfg77A"
                }
            });
            message.success(response.data.message);
            fetchUsers();
        } catch (error) {
            message.error(error.response.data.message.replaceAll('"', ""));
        }
    };

    const handleEdit = (id) => {
        navigate(`/users/edit/${id}`);
    };

    const handleView = (id) => {
        const user = users.find(user => user._id === id);
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    const handleTableChange = (pagination) => {
        setPagination({
            ...pagination,
            current: pagination.current,
            pageSize: pagination.pageSize,
        });
    };

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            sorter: true,
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            sorter: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: true,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (_, record) =>(
                <Image src={`http://localhost:8080/api/images/${record.image}`} alt={record.firstName} style={{ width: 50, height: 50 }} />
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => handleView(record._id)}>View</Button>
                    <Button onClick={() => handleEdit(record._id)}>Edit</Button>
                    <Popconfirm title="Are you sure to delete this user?" onConfirm={() => handleDelete(record._id)}>
                        <Button type="primary" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                rowKey={(record) => record._id}
                dataSource={users}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            {selectedUser && (
                <Modal
                    title="User Details"
                    open={isModalVisible}
                    onCancel={() => setIsModalVisible(false)}
                    footer={[
                        <Button key="close" onClick={() => setIsModalVisible(false)}>
                            Close
                        </Button>
                    ]}
                >
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                            <p><strong>First Name:</strong> {selectedUser.firstName}</p>
                            <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
                            <p><strong>Email:</strong> {selectedUser.email}</p>
                        </div>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <Image
                                src={`http://localhost:8080/api/images/${selectedUser.image}`}
                                alt={selectedUser.firstName}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default UsersTable;
