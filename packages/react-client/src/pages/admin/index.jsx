import React from 'react';
import http from "@/utils/http";

class Admin extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            data : []
        }
    }

    handleClick () {
        const res = http.post("/auth/user/list")
        console.log(res);
    }

    render(){
        return (
            <div>
                <div> Admin </div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}
export default Admin;