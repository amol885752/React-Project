import React, { Component } from 'react';

class ReactStateInClassComp extends Component {
    
    constructor(){
        super()
        
        this.state = {
            message:"Welcome ",
            name:"Amol",
            city:'Pune'
        }
        
    }
    chnageMessage(){
        this.setState(
            {
                message: "Farewell... ",
            },
            () => console.log(this.state.message)
        )
       
    }

    render() {

        const {message,name,city}=this.state

        return (
            <div>
                <h1>React state </h1>
                {/* {this.state.message}
                <h2>Name:{this.state.name}</h2>
                <h2>City:{this.state.city}</h2> */}
                 { message}
                <h2>Name:{ name}</h2>
                <h2>City:{ city}</h2>
                <br />
                <button onClick={this.chnageMessage.bind(this)}>Change Message </button>
                
            </div>
        );
    }
}

export default ReactStateInClassComp;