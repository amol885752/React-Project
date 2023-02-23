
import React, { Component } from 'react';

class StateReactComp extends Component {
    constructor(){
        super() 
        //with variable
        this.user ='Guest'
        //with state
        this.state ={
            user:"Guest"
        }
    }

    changeUserName(){
        console.log("button Cliked");
        this.user ='admin'
        console.log(this.user);
    }

    changeUserNameWithSate(){

        this.setState({
           user : 'admin' 
        })
        console.log("button from state Cliked");
        
    }
    render() {
        console.log("Component render ")
        return (
            <div>

                <h4>User from variable: {this.user}</h4>
                 <button onClick={this.changeUserName.bind(this)}>Change User</button>
                 <br></br>

                <h5>user from state :{ this.state.user}</h5>
                <button onClick={this.changeUserNameWithSate.bind(this)}>Change User with state</button>
            </div>
        );
    }
}

export default StateReactComp;