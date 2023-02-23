import React, { Component } from 'react';
import ChildComp from './ChildComp'
class ParentComp extends Component {
    
    getDataFromChild(message){
        alert(`Function Called ${message}"`)
    }
    render() {
        return (
            <div>
                <h1>This is Parent comp</h1>
                <ChildComp parentFunction ={this.getDataFromChild}/>
            </div>
        );
    }
}

export default ParentComp;