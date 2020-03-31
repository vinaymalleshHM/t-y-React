import React, { Component } from 'react'

export default class Child extends Component {
state = {
    count :0
};

setCount =()=>{
    // 1st way 
    // this.setState({
    //     count : this.state.count +5
    // })

    //Second Way
    // this.setState({
    //     count : this.state.count+5
    // },()=>{
    //     this.props.getCount(this.state.count)
    // });
    // //console.log('State Data',this.state)
    // // this.props.getCount(this.state.count)

    this.setState((prevState,prevProps)=>{
        console.log('Prev Props ',prevProps)
        return {
            count : prevState.count+5
        }
    },()=>{
        this.props.getCount(this.state.count)
    })

}

    render() {
        return (
            <>
                <h1>Count {this.state.count}</h1>
                <button onClick={this.setCount}>Click to increment count by 5</button>
            </>
        )
    }
}
