import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent';
import FuncComponent from './FuncComponent';

export default class ParentComponent extends Component {
//export default class ParentComponent extends PureComponent {
state ={
    name :'Anu'
}
   componentDidMount() {
       setInterval(()=>{
           this.setState({
               name : 'Anu'
           })
       },3000)
   }
   
    render() {
        console.log('Parent Component rendering');
        
        return (
            <>
                {this.state.name}
        <RegComponent name={this.state.name}/>
                <FuncComponent name={this.state.name}/>
                           </>
        )
    }
}
