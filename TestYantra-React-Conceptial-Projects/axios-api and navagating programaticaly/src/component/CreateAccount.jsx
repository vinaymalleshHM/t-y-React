import React, { Component } from 'react'
import Axios from 'axios'

export default class CreateAccount extends Component {
    state = {
        userName: '',
        emailId: '',
        mobileNo: '',
        password: ''
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    saveData = (event) => {
        event.preventDefault()
        console.log("Form Data ",this.state)
        const formData = this.state;

        const url = 'https://react-app-b4565.firebaseio.com/accounts.json'
Axios.post(url,formData).then((response)=>{
    console.log("Success ",response)
    if(response.status===200){
        // this.setState({
        //  userName: '',
        // emailId: '',
        // mobileNo: '',
        // password: ''
        // })
        this.props.history.push('/show')
    }
}).catch((err)=>{
    console.log("Error ",err)

})

    }

    render() {
        return (
            <>
                <div className="card col-md-4 offset-4 mt-5">
                    <div className="card-body">
                        <h3 className="card-title offset-3">Registration page</h3>
                        <form className="form-group" onSubmit={this.saveData}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text"   className="form-control"  name="userName"  value={this.state.userName} onChange={this.handleChange} />
                                <p ></p>
                            </div>
                            <div className="form-group">
                                <label>Email ID:</label>
                                <input type="text" className="form-control" name="emailId" value={this.state.emailId} onChange={this.handleChange} />
                                <p></p>
                            </div>
                            <div className="form-group">
                                <label>Mobile No:</label>
                                <input type="text"  className="form-control" name="mobileNo" value={this.state.mobileNo} onChange={this.handleChange} />
                                <p ></p>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password"  className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                                <p ></p>
                            </div>
                            <input type="submit" className="btn btn-primary offset-4 mt-3" value="Create" />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
