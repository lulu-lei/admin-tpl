import React from 'react'
import { Layout } from "antd";
import logo from "../../assets/images/logo.png";
import "./style/login.less";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout className="login-page">
        <Header className="login-header">
          <img src={logo} />
          <h2>后台管理系统</h2>
        </Header>
        <Content>Content</Content>
      </Layout>
    );
  }
}
export default Login;