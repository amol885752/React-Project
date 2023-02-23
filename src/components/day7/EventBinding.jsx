import React, { Component } from 'react';

class EventBinding extends Component {
    constructor() {
        super();
        //Binding Event Handler in the Constructor
        //this.chageMessage =this.chageMessage.bind(this)

        this.state ={
            message:'Welcome'
        }
    }

    chageMessage(){
        this.setState({
            message:'Farewell..'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>Event Binding</h1>
                {this.state.message}
                {/* Binding Event Handler in Render Method */}
                {/* <button onClick={this.chageMessage.bind(this)}>Click me</button> */}
                {/* Binding Event Handler using Arrow Function */}
                <button onClick={()=>this.chageMessage()}>Click me</button>

                {/* <button onClick={this.chageMessage}>Click me</button> */}
            </div>
        );
    }
}

export default EventBinding;