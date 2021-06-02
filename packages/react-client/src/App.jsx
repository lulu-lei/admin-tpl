import React from "react";
import { Button, message, DatePicker } from "antd"
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "@/pages/login";
import Admin from "@/pages/admin";

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>{/* 只匹配其中一个 */}
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
