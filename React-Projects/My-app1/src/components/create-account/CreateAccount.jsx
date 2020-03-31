import React, { useState, useEffect, Component } from 'react'
import Axios from 'axios'


export default class CreateAccount extends Component {

    state = {
        username: '',
        emailid: '',
        mobileno: '',
        password: '',
        gender: '',
        drop: '',
        conPassword: '',
        showErrName: false,
        showErrEmail: false,
        showErrMobile: false,
        showErrPass: false,
        showErrConPass: false,
        showErrDrop: false,
        showErrGender: false
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validForm = async (event) => {
        event.preventDefault()

        const { username, emailid, mobileno, password, drop, gender, conPassword } = this.state
        if (username.trim().match(/^[a-zA-Z ]*$/) && username !== '') {
            await this.setState({
                showErrName: false

            })
            console.log(this.state.showErrName)
        }
        else {

            await this.setState({
                showErrName: true

            })
            console.log(this.state.showErrName)

        }
        if (emailid.trim().match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
            await this.setState({
                showErrEmail: false

            })
            console.log(this.state.showErrEmail)

        }
        else {

            await this.setState({
                showErrEmail: true

            })
            console.log(this.state.showErrEmail)
        }
        if (mobileno.trim().match(/^[0-9]{10}$/)) {
            await this.setState({
                showErrMobile: false

            })
            console.log(this.state.showErrMobile)
        }
        else {

            await this.setState({
                showErrMobile: true

            })

            console.log(this.state.showErrMobile)

        }
        if (password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) && password !== "") {
            await this.setState({
                showErrPass: false

            })

            console.log(this.state.showErrPass)

        }
        else {

            await this.setState({
                showErrPass: true

            })

            console.log(this.state.showErrPass)

        }

        if (password === conPassword) {
            await this.setState({
                showErrConPass: false

            })
            console.log(this.state.showErrConPass)
        }
        else {

            await this.setState({
                showErrConPass: true

            })

            console.log(this.state.showErrDdrop)

        }

        if (drop !== '') {
            await this.setState({
                showErrDrop: false

            })
            console.log(this.state.showErrDrop)
        }
        else {

            await this.setState({
                showErrDrop: true

            })

            console.log(this.state.showErrDdrop)

        }
        if (gender !== '') {
            await this.setState({
                showErrGender: false

            })
            console.log(this.state.showErrGender)
        }
        else {

            await this.setState({
                showErrGender: true

            })

            console.log(this.state.showErrGender)

        }
        this.sendCorrect()
    }

    sendCorrect = () => {
        if (this.state.showErrName !== true && this.state.showErrEmail !== true && this.state.showErrPass !== true && this.state.showErrMobile !== true && this.state.showErrDrop !== true && this.state.showErrGender !== true && this.state.showErrConPass !== true) {
            console.log('hj', this.state.username)
            console.log('hj', this.state.emailid)
            console.log('hj', this.state.mobileno)
            console.log('hj', this.state.password)
            console.log('hj', this.state.drop)
            console.log('hj', this.state.gender)
            this.saveData()
        }
    }

    // dataDetaills = {
    
    //     userName: this.state.username,
    //     emailId: this.state.emailid,
    //     mobileNo: this.state.mobileno,
    //     pasword: this.state.password,
    //     drops: this.state.drop,
    //     genders: this.state.gender
    // }
        
    
    saveData = () => {
        // event.preventDefault()
       
        const formData = this.state
        
        const url = 'https://react-myshop-project.firebaseio.com/createaccounts.json'
        Axios.post(url, formData).then((response) => {
            console.log("Success ", response)
            if (response.status === 200) {

                this.props.history.push('/login')
            }
        }).catch((err) => {
            console.log("Error ", err)

        })

    }

    render() {



        return (<>
            <div className="card col-md-4 offset-4 mt-5">
                <div className="card-body">
                    <h3 className="card-title offset-3">Registration page</h3>
                    <form name="userRegistrationForm" onSubmit={this.validForm} className="form-group">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="username" className="form-control"
                                value={this.state.username} onChange={this.handleChange} />
                            {this.state.showErrName ? <p style={{ color: 'red', fontSize: '15px' }}>User Name should be characters only</p> : null}

                        </div>
                        <div className="form-group">
                            <label>Email ID:</label>
                            <input type="text" className="form-control" name="emailid"
                                value={this.state.emailid} onChange={this.handleChange} />
                            {this.state.showErrEmail ? <p style={{ color: 'red', fontSize: '15px' }}>Enter valid Email</p> : null}


                        </div>
                        <div className="form-group">
                            <label>Mobile No:</label>
                            <input type="text" name="mobileno" className="form-control"

                                value={this.state.mobileno} onChange={this.handleChange} />
                            {this.state.showErrMobile ? <p style={{ color: 'red', fontSize: '15px' }}>Enter 10 digit</p> : null}


                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="text" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange} />
                            {this.state.showErrPass ? <p style={{ color: 'red', fontSize: '15px' }}>password length Should be 8 and minimum one upercase,loswercase and Special symbol</p> : null}

                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input type="text" name="conPassword" className="form-control"
                                value={this.state.conPassword} onChange={this.handleChange} />
                            {this.state.showErrConPass ? <p style={{ color: 'red', fontSize: '15px' }}>password should Match</p> : null}

                        </div>
                        <div className="form-group row">
                            <h5 className="col-sm-5 col-form-label">Gender</h5>
                            <div className="col-sm-8 mt-2" required>
                                <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male
                            <input type="radio" className="ml-2" name="gender" value="Female" onChange={this.handleChange} /> Female
                    </div>

                        </div>
                        {this.state.showErrGender ? <p style={{ color: 'red', fontSize: '15px' }}>Please Select Gender</p> : null}
                        <div>
                        <h5 className="col-md-5 col-form-label">Choose Your Role</h5>
                            <select name="drop" value={this.state.drop} onChange={this.handleChange}>
                                <option disable>Choose</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>

                            </select>
                        </div>
                        {this.state.showErrDrop ? <p style={{ color: 'red', fontSize: '15px' }}>Please Select Your Role</p> : null}
                        <input type="submit" className="btn btn-primary offset-4 mt-3" value="Register" />
                    </form>
                </div>
            </div>
        </>

        );

    }
}
