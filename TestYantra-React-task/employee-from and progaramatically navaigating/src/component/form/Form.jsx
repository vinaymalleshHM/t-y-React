import React, { Component } from 'react'
import UserContext, { UserConsumer } from '../../context/userContext';
import Axios from 'axios';
import { Button, Modal } from 'react-bootstrap'


export default class Form extends Component {

    state = {
        emailid: '',
        password: '',
        show:false
    }

    static contextType = UserContext;



    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }




    getAllAccount = (event) => {
        event.preventDefault()
        const url = 'https://react-employee-project.firebaseio.com/employeeaccounts.json'
        Axios.get(url).then((response => {
            console.log("Response ", response)
            const fetchedRecipies = []
            for (const key in response.data) {
                let recipe = response.data[key]

                if (recipe.emailid === this.state.emailid && recipe.password === this.state.password) {
                    console.log("email is ok")
                    this.context.setLogin(true)
                    this.setState({
                        show :!this.state.show,
                        ...this.state
                    })
                    this.props.history.push('/showacc')
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
                        <form onSubmit={this.getAllAccount} className="form-group">
                            <h1 className="card-title offset-4">Login</h1>
                            <div className="form-group">
                                <label>Email ID:</label>
                                <input type="text" className="form-control" name="emailid" value={this.state.emailid} onChange={this.handleChange} />
                                {/* <p style={regStyle}>{this.state.errors.emailid}</p> */}
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                                {/* <p style={regStyle}>{this.state.errors.password}</p> */}
                            </div>

                            <input type="submit" className="btn btn-primary offset-4" value="Register" />

                        </form>
                    </div>
                </div>

                <Modal show={this.state.show} onHide={() => this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal>
            </>


        )
    }
}
