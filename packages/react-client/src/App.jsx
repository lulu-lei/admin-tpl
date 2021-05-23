import React from 'react';
import { Button, message } from "antd"
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    message.success("成功！");
  }

  render () {
    return (
      <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
    )
  }
}

export default App;

// https://blog.csdn.net/qq_35307549/article/details/116061370
