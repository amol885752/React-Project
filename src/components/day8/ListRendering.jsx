import React, { Component } from 'react';
import axios from 'axios';
class ListRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         usersData:["Ramesh","Sachin",'Umesh',"Mahesh","Yogita","Pooja"],
         users:[]
      }
    }
    
   async getUsersData(){
       const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(usersRes);

        this.setState({
            users:usersRes.data
        })

    }
    render() {
       // const {users} = this.state.usersData
        return (
            <div>
                <h1>List redering</h1>
                <button onClick={()=>this.getUsersData()}>Get Data</button>
                {/* <h1>{ this.state.usersData[0]}</h1>
                <h1>{ this.state.usersData[1]}</h1>
                <h1>{ this.state.usersData[2]}</h1>
                <h1>{ this.state.usersData[3]}</h1>
                <h1>{ this.state.usersData[4]}</h1>
                <h1>{ this.state.usersData[5]}</h1> */}
                {/* {
                    this.state.usersData.map((user)=><h1>{user}</h1>)
                } */}

                {
                    this.state.users.map((user)=>{
                   return <h1 key={user.id}>User Name : {user.name}  Email: {user.email}</h1>
                })
                }
            </div>
        );
    }
}

export default ListRendering;