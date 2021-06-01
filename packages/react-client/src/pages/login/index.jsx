import React from 'react'
import { Layout, message, Form, Input, Button, Checkbox } from "antd";
import {withRouter} from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import "./style/login.less";
import LoginForm from "./components/LoginForm";
import http from "@/utils/http";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  async getUserInfo (e) {
    // try {
      let loginResult = await http.post("/auth/user", e);
      console.log(loginResult, loginResult.data.success, this);
      if (loginResult.data.success) {
        window.localStorage.setItem("token", loginResult.data.token)
        this.props.history.push("/");
      } else {
        message.error("密码错误！");
      }
    // } catch (error) {
    //   message.error("登录失败，请稍后重试！");
    // }
  }

  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout className="login-page">
        <Header className="login-header">
          <img src={logo} />
          <h2>后台管理系统</h2>
        </Header>
        <Content className="login-content">
          <div className="login-form-containter">
            <h2>用户登录</h2>
            <LoginForm getUserInfo={this.getUserInfo} />
          </div>
        </Content>
      </Layout>
    );
  }
}
export default withRouter(Login);