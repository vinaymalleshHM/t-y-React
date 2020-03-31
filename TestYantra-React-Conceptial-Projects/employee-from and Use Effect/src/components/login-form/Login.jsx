import React, { Component } from 'react'


export default class Login extends Component {

    state = {
        userName: '',
        showUserName : false

    }

    handleChange = (event)=>{
        const userName = event.target.value
        this.setState({
            userName : userName
        })
        console.log('User name ',this.state.userName)
    }


    handleSubmit = event =>{
        event.preventDefault();
        console.log('User Name ',this.state.userName)
        const { userName } = this.state
        if(userName.trim().length<5){
            this.setState ({
                showUserName : true
            })
            
        }
        else{
            this.setState ({
                showUserName : false
            }) 
        }
    }



    render() {

const unameStyle={
    color:'red',
    fontSize :'20px'
}

        return (
            <div className="card col-md-4 mt-5 offset-4">
            
                <form onSubmit={this.handleSubmit}>
                        <legend className="h1 card-header">Employee Form</legend>
                    <div className="card-body form-group">

                        <label htmlFor="">User name :</label>
                        <input type="text" className="form-control" id=""  value={this.state.userName} onChange={this.handleChange} placeholder="Enter Username" />
                        {this.state.showUserName? <p style={unameStyle}>Invalid Name</p>:null  }
                    </div>

                    <button type="submit" className="btn btn-primary mb-2 offset-4">Submit</button>
                </form>

            </div>
        )
    }
}
