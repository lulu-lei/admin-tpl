import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./style/LoginForm.less";

const LoginForm = (props) => {
  const { getUserInfo } = props;

  const handleFinish = (values) => {
    getUserInfo(values);
  }

  return (
    <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={handleFinish}>
      <Form.Item name="username" rules={[{ required: true, message: "请输入用户名！" }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "请输入密码！" }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        没有账号， <a href="">立即注册！</a>
      </Form.Item>
    </Form>
  )
}

export default LoginForm;