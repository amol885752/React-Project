import React, { Component } from 'react';

class FormBasics extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:'',
         lang:'React Native'
      }
    }
    //user Name
    ChangeUserName =(event)=>{
        console.log(event.target.value);
       this.setState({
        userName:event.target.value
       })
    }
    //Comments 
    changeComments = (event)=>{
        console.log(event.target.value);
        this.setState({
            comments:event.target.value
        })
    }
    //Language
    changeLang =(event)=>{
        this.setState({
            lang : event.target.value
        })
    }

    //submit button
    submitData =(event)=>{
            alert(`User Name :${this.state.userName} Comments:${this.state.comments} Language:${this.state.lang}`)
            event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitData}>
                <div className='h1Center'>
                    <label>
                        User Registration Form
                    </label><br></br>
                    <label>
                        User Name:
                    </label>
                    <input type="text"  value={this.state.userName} onChange={this.ChangeUserName}/>
                </div>

                <div className='h1Center'>
                    <label>
                        Comments:
                    </label>
                    <textarea name="" id="" cols="30" rows="10" value={this.state.comments} onChange={this.changeComments}></textarea>
                </div>

                <div className='h1Center'>
                    <label>Select Languages</label>
                    <select name="" id="" value={this.state.lang} onChange={this.changeLang}>
                        <option value="React">React</option>
                        <option value="Angualar">Angualar</option>
                        <option value="Vue">Vue</option>
                        <option value="React Native">React Native</option>
                    </select>
                </div>
                <div className='h1Center'>
                <button type="submit" >Submit</button>
                </div>
               
            </form>
        );
    }
}

export default FormBasics;