import React, { Component } from 'react';

class ReactClassComp extends Component {
    constructor(props) {
      super(props)
    //create state in class comp
      this.state = {
         color:"Red"
      }

    }
    
    render() {
      const  changeColor = ()=>{
            this.setState({
                color:"Green"
            })

        }
        return (
            <div>
                <h1>Claas comp</h1>
                {/* Use State  */}
                <h3>Color:{this.state.color}</h3>
                <button onClick={changeColor}>Change Color</button>
            </div>
        );
    }
}

export default ReactClassComp;