import React from "react";
import { Layout, message, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import "./style/login.less";
import http from "@/utils/http";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.userLogin = this.userLogin.bind(this);
  }

  handleFinish = (values) => {
    this.userLogin(values);
  }

  async userLogin(userInfo) {
    try {
      let loginResult = await http.post("/auth/user", userInfo);
      if (loginResult.data.success) {
        window.localStorage.setItem("token", loginResult.data.token)
        this.props.history.push("/");
      } else {
        message.error("密码错误！");
      }
    } catch (error) {
      message.error("登录失败，请稍后重试！");
    }
  }

  render() {
    const { Header, Content } = Layout;
    const LoginForm = (
      <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={this.handleFinish}>
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
    return (
      <Layout className="login-page">
        <Header className="login-header">
          <img src={logo} />
          <h2>后台管理系统</h2>
        </Header>
        <Content className="login-content">
          <div className="login-form-containter">
            <h2>用户登录</h2>
            {LoginForm}
          </div>
        </Content>
      </Layout>
    );
  }
}


export default withRouter(Login);
