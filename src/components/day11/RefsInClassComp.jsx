import React, { Component } from 'react';

class RefsInClassComp extends Component {
    constructor(props) {
      super(props)
    //create ref
      this.inputRef = React.createRef()
      
    }
    //access and add focus to it
    componentDidMount(){
        this.inputRef.current.focus();
    }
    render() {
        return (
           
            <form>
                <div className='center'>
                    Login Form
                </div>
                <div className='center'>
                    <label >User Name </label>
                    <input type="text" name="" id=""  ref={ this.inputRef} />
                    {/* Attach ref to element */}
                </div>
                <div className='center'>
                    <label >Password </label>
                    <input type="password" name="" id="" />
                </div>
                <div className='center'>
                   <button type='submit'> Submit</button>
                </div>

            </form>
           
        );
    }
}

export default RefsInClassComp;