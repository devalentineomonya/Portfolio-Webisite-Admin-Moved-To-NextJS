import { UploadOutlined } from '@ant-design/icons';
import { Input, Upload, Button } from 'antd';

const usersForm = [
  {
    name: 'firstName',
    label: 'First Name',
    rules: [{ required: true, message: 'Please input your first name!' }],
    component: <Input  />,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    rules: [{ required: true, message: 'Please input your last name!' }],
    component: <Input />,
  },
  {
    name: 'email',
    label: 'Email',
    rules: [{ required: true, type: 'email', message: 'Please input a valid email!' }],
    component: <Input />,
  },
  {
    name: 'password',
    label: 'Password',
    rules: [{ required: true, message: 'Please input your password!' }],
    component: <Input.Password />,
  },
  {
    name: 'image',
    label: 'Upload Image',
    valuePropName: 'fileList',
    getValueFromEvent: (e) => Array.isArray(e) ? e : e && e.fileList,
    extra: 'Please upload an image',
    component: (
      <Upload name="image" listType="picture" beforeUpload={() => false}>
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    ),
  },
];

export default usersForm;
