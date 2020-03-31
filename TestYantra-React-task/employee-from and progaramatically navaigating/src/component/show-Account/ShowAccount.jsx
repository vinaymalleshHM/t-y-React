import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Modal } from 'react-bootstrap'

export default class ShowAccount extends Component {
    state = {
        username: '',
        emailid: '',
        mobileno: '',
        password: '',
        recipies: [],
        show: false,
        showit: false,
        details: [],
        id: null
    }

    componentDidMount() {
        this.getAllRecipies()
    }
    getAllRecipies = () => {
        const url = 'https://react-employee-project.firebaseio.com/employeeaccounts.json'
        Axios.get(url).then((response => {
            console.log("Response ", response)
            const fetchedRecipies = []
            for (const key in response.data) {
                let recipe = response.data[key]
                fetchedRecipies.push({
                    ...recipe,
                    id: key
                })
               // console.log('Accounts ', fetchedRecipies)
                this.setState({
                    recipies: fetchedRecipies
                })
            }

        })).catch((err) => {
            console.log('Error ', err)
        })
    }

    async deleteRecipies(accToDelete) {
        console.log("Account to be deleted ", accToDelete)
        const id = accToDelete.id

        const url = `https://react-employee-project.firebaseio.com/employeeaccounts/${id}/.json`

        try {
            const response = await Axios.delete(url)
            const myAccounts = [...this.state.recipies]
            const index = myAccounts.indexOf(accToDelete)
            myAccounts.splice(index, 1)
            this.setState({
                recipies: myAccounts
            })
        } catch (error) {
            console.log('Error ', error)
        }
    }

    handleClose = () => {
        this.setState({
            show: !this.state.show
        })
    }
    handleShow = (acctoEdit) => {
        console.log("Account to edit ", acctoEdit)
        this.setState({
            show: !this.state.show,
            ...acctoEdit
        })
    }
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    saveData = async () => {
        console.log("State Data ", this.state)
        const { username, emailid, mobileno ,password} = this.state
        const acctoUpdate = {

            username, emailid, mobileno,password
        }
        const url = `https://react-employee-project.firebaseio.com/employeeaccounts${this.state.id}/.json`

        const response = await Axios.put(url, acctoUpdate)
        console.log("Response ", response)
        if (response.status === 200) {

            this.handleClose();
            this.state.recipies.map((val, index) => {
                //  console.log('val id ',val.id)

                if (val.id === this.state.id) {
                    console.log(this.state.id)
                    //const {userName,emailId,mobileNo,password} =val

                    // this.setState({
                    val.username = this.state.username
                    val.emailid = this.state.emailid
                    val.mobileno = this.state.mobileno
                    val.password = this.state.password
                    // })
                }


            })
            this.setState({
                recipies: this.state.recipies
            })
        }
    }



    render() {
        return (
                <>
                    <div className='table-responsive container-fluid'>
                        <table className="table table-striped table-hover mt-5 table-bordered">
                            <thead className='thead-dark'>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email Id</th>
    
                                    <th>Mobile No.</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
    
                                {
                                    this.state.recipies.map((account) => {
    
                                        return (
                                            <tr key={account.id}>
                                                <td>{account.username}</td>
                                                <td>{account.emailid}</td>
                                                <td>{account.mobileno}</td>
                                                <td><button className='btn btn-danger' onClick={() => { this.deleteRecipies(account) }}>Delete</button> </td>
                                                <td><button className='btn btn-success offset-2' onClick={() => this.handleShow(account)}>Edit</button> </td>
                                            </tr>)
                                    })
    
                                }
                            </tbody>
                        </table>
                    </div>
    
                    <Modal show={this.state.show} onHide={() => this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="card">
                                <div className="card-body">
    
                                    <form className="form-group" onSubmit={this.saveData}>
                                        <div className="form-group">
                                            <label>User Name:</label>
                                            <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                                            <p></p>
                                        </div>
                                        <div className="form-group">
                                            <label>Email Id:</label>
                                            <input type="text" className="form-control" name="emailid" value={this.state.emailid} onChange={this.handleChange} />
                                            <p></p>
                                        </div>
                                        <div className="form-group">
                                            <label>Mobile No:</label>
                                            <input type="text" className="form-control" name="mobileno" value={this.state.mobileno} onChange={this.handleChange} />
                                            <p ></p>
                                        </div>
                                        <div className="form-group">
                                            <label>Password:</label>
                                            <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                                            <p ></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.handleClose()}>Close  </Button>
                            <Button variant="primary" onClick={() => this.saveData()}> Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
    
                </>
            )
        
    }

}
