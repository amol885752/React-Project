import React, { Component } from 'react';

class PropsDestructuingClassComp extends Component {
    render() {
        const {name, city, company, contact,} = this.props
       
        return (
            <div>
                {/* <h1>Props Destructuing in Class Comp</h1>
                <h3>Name :{this.props.name}</h3>
                <h3>City :{this.props.city}</h3>
                <h3>Company:{this.props.company}</h3> */}
            
                <h3 style={{color:'green',textAlign:'center'}}>Name :{name} pratiksha</h3>
                <h3 style={{color:'red',textAlign:'center'}}>City :{city} pune</h3>
                <h3 style={{color:'blue',textAlign:'center'}}>Company :{company} TSH  </h3>
                <h3 style={{color:'pink',textAlign:'center'}}>Contact :{contact} 9975662273</h3>

                
            </div>
        );
    }
}

export default PropsDestructuingClassComp;