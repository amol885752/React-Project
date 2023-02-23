import React, { Component } from 'react';
import axios from 'axios';
class ClassCompLifeCycleMethod extends Component {
   
   //Initialization
    constructor(props) {
        console.log("in constructor")
      super(props)
    
      this.state = {
         message:'Welcome',
         users:[],
         showComp:true
      }
      console.log(this.state.message);

    }
    //mounting phase 
    //method 1   (while Updating first method will call)
    static getDerivedStateFromProps(props,state){
        console.log("From getDerivedStateFromProps ",props.msg)

        return {message:props.msg};
    }
    //mounting phase :method 2 
     async componentDidMount(){
       
        console.log("From componentDidMount");
        //most use for api call
        const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(usersRes.data);

        //update state value 
        this.setState({
            users:usersRes.data,
            showComp:false
        })
    }

    //updating  - 1
    // static getDerivedStateFromProps(props,state){
    //     console.log("From getDerivedStateFromProps ",props.msg)

    //     return {message:props.msg};
    // }
    
    //updating  - 2
    shouldComponentUpdate(){
        console.log(" from shouldComponentUpdate")
        return true;// retrun false
    }
    //updating -3 render

    //updating -4
    getSnapshotBeforeUpdate(){
        console.log("From getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("from componentDidUpdate")
    }
    render() {
        console.log("From Render")
        return (
            <div>
              Message:  {this.state.message}
                <h1>Class comp Life cycle method</h1>
               {this.state.showComp && <LifeCycleMethod/>} 
            </div>
        );
    }
}

export default ClassCompLifeCycleMethod;


class LifeCycleMethod extends Component {
    componentWillUnmount(){
        console.log("from componentWillUnmount");
    }
    render() {
        return (
            <div>
                <h1>Hey, I will be unmound/remove from dom</h1>
            </div>
        );
    }
}

