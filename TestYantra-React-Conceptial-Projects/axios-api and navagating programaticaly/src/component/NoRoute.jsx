import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


 class NoRoute extends Component {

    // componentDidMount() {
    //     console.log('No Route Comp props',this.props)
    // }
    
    navigatingProgramatically = ()=>{
        console.log('Props Object',this.props)
        this.props.history.push('/home')

    }


    render() {
        return (
            <div>
                <button  onClick={this.navigatingProgramatically} style={{color:'blue',position:'fixed',bottom:"10%",left:'50%'} }>Home Page</button>
            </div>
        )
    }
}
export default withRouter (NoRoute)

