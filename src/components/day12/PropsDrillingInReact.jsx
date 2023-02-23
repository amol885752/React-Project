import React, { Component,createContext } from 'react';

//to ovcome prop drilling problem use context
// const MessageName = createContext()
 const MessageContext = React.createContext()


class PropsDrillingInReact extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to React.."
      }
    }
    
    render() {
        return (
            <div>
                <h1>PropsDrillingInReact</h1>
                <MessageContext.Provider value={this.state.message}>
                     <Parent/>
                </MessageContext.Provider>
               
            </div>
        );
    }
}

export default PropsDrillingInReact;


 class Parent extends Component {
  render() {
   
    return (
      <div>
        <h1>I am Parent</h1>
        <Child1 message={this.props.message}/>
      </div>
    )
  }
}
class Child1 extends Component {
    render() {
      return (
        <div>
          <h1>I am Child1</h1>
          <Child2 message={this.props.message}/>
        </div>
      )
    }
  }

  class Child2 extends Component {
    render() {
      return (
        <div>
          <h1>I am Child2</h1>
          <Child3 message={this.props.message}/>
        </div>
      )
    }
  }

  class Child3 extends Component {
    render() {
        console.log(this.props.message);
      return (
        <div>
          <h1>I am child 3</h1>
          <MessageContext.Consumer>
                {value=><h1>{value}</h1>}
          </MessageContext.Consumer>
         {/* Meesage: {this.props.message} */}
        </div>
      )
    }
  }


