import React, { Component } from 'react'
import UserContext, { UserProvider } from '../../context/userContext'
import Axios from 'axios'


export default class Form extends Component {

    static contextType = UserContext
    user = this.context
    nav = true
    state = {
        emailid: '',
        password: '',
        showErrEmail: false,
        showErrPass: false,
        user: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validForm = async (event) => {
        event.preventDefault()
        // console.log(this.context.login)
        const { emailid, password } = this.state

        if (emailid.trim().match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
            await this.setState({
                showErrEmail: false

            })
            // console.log(this.state.showErrEmail)

        }
        else {

            await this.setState({
                showErrEmail: true

            })
            // console.log(this.state.showErrEmail)
        }
        if (password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) && password !== "") {
            await this.setState({
                showErrPass: false

            })

            // console.log(this.state.showErrPass)

        }
        else {

            await this.setState({
                showErrPass: true

            })

            // console.log(this.state.showErrPass)

        }
        this.sendCorrect()
    }
    sendCorrect = () => {
        if (this.state.showErrEmail !== true && this.state.showErrPass !== true) {
            this.getAllAccount()
        }
    }

    getAllAccount = () => {
        // event.preventDefault()
        const url = 'https://react-myshop-project.firebaseio.com/createaccounts.json'
        Axios.get(url).then((response => {
            // console.log("Response ", response)
            const fetchedRecipies = []
            for (const key in response.data) {
                let account = response.data[key]

                if (account.emailid === this.state.emailid && account.password === this.state.password) {
                    console.log("email is ok")
                    this.user.setLogin(true)

                    window.localStorage.setItem('user',account.emailid);
                    window.localStorage.setItem('role', account.drop);
                    window.localStorage.setItem('mobile', account.mobileno);
                    window.localStorage.setItem('isLogin', true);
                }

            }

        })).catch((err) => {
            console.log('Error ', err)
        })
    }

    render() {
        return (
            <>
                <div className="card col-md-4 offset-4 mt-5">
                    <div className="card-body">
                        <form onSubmit={this.validForm} className="form-group">
                            <h1 className="card-title offset-4">Login</h1>
                            <div className="form-group">
                                <label>Email ID:</label>
                                <input type="text" className="form-control" name="emailid" value={this.state.emailid} onChange={this.handleChange} />
                                {this.state.showErrEmail ? <p style={{ color: 'red', fontSize: '20px' }}>Enter valid Email</p> : null}
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                                {this.state.showErrPass ? <p style={{ color: 'red', fontSize: '20px' }}>Enters pass is wrong</p> : null}

                            </div>

                            <input type="submit" className="btn btn-primary offset-4" value="login" />

                        </form>
                    </div>
                </div>
            </>
        );
    }
}
