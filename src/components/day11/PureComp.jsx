import React,{Component,PureComponent} from "react";

class PureComp extends PureComponent{
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Welcome"
      }
    }
    // shouldComponentUpdate(){
        //shallow comp - if value change then it retruns true else false
    // }
    changeMessage =()=>{
        this.setState({
            msg:"Welcome User "
        })
    }
    render() {
        console.log("I am Render method")

        return (
            <div>
               <h1>Hello : {this.state.msg}</h1>
               <button onClick={this.changeMessage}>Change Message</button>
            </div>
        );
    }
}
export default PureComp