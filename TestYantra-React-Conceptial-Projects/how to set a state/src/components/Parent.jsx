import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    getCount = (count)=>{
        console.log('Count value ', count)
    } 
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <h1>{this.props.uname}</h1>

                <Child  getCount={this.getCount}/>
            </div>
        )
    }
}
