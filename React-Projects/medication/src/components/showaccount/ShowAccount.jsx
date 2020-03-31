import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
export default class ShowAccount extends Component {
    state = {
        accounts: [],
        show: false,
        userName: '',
        emailId: '',
        mobileNo: '',
        password: ''
    }

    componentDidMount() {
        this.getAllAccounts()
    }
    getAllAccounts = () => {
        const url = 'https://react-medi.firebaseio.com/createaccounts.json'
        Axios.get(url).then((response => {
            console.log("Response ", response)
            const fetchedAccount = []
            for (const key in response.data) {
                let account = response.data[key]
                fetchedAccount.push({
                    ...account,
                    id: key
                })
                // account.id=key
                // fetchedAccount.push(account)
                console.log('Accounts ', fetchedAccount)
                this.setState({
                    accounts: fetchedAccount
                })
            }

        })).catch((err) => {
            console.log('Error ', err)
        })
    }

    async deleteAccount(accToDelete) {
        console.log("Account to be deleted ", accToDelete)
        const id = accToDelete.id
        const url = 'https://react-app-b4565.firebaseio.com/accounts/' + id + '/.json'

        try {
            const response = await Axios.delete(url)
            const myAccounts = [...this.state.accounts]
            const index = myAccounts.indexOf(accToDelete)
            myAccounts.splice(index, 1)
            this.setState({
                accounts: myAccounts
            })
            console.log('Response ', response)
            //unless, untill it is required don make unnecessary calls to server
            //worst programming practice
            // this.getAllAccounts();
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
        const { userName, emailId, mobileNo, password } = this.state
        const acctoUpdate = {
            userName, emailId, mobileNo, password
        }
        const url = `https://react-app-b4565.firebaseio.com/accounts/${this.state.id}/.json`

        const response = await Axios.put(url, acctoUpdate)
        if (response.status === 200) {
            this.handleClose();
            this.state.accounts.map((val, index) => {
                if (val.id === this.state.id) {
                    console.log(this.state.id)
                    val.userName = userName
                    val.emailId = emailId
                    val.mobileNo = mobileNo
                    val.password = password
                    return val
                }
            })
            this.setState({
                show: false,
                accounts: this.state.accounts
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
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Gender</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
   
                            this.state.accounts.map((account) => {

                                return (
                                    <tr key={account.id}>
                                        <td>{account.fName+account.lName}</td>
                                        <td>{account.email}</td>
                                        <td>{account.mobile}</td>
                                        <td>{account.gender}</td>
                                        <td><button className='btn btn-danger' onClick={() => { this.deleteAccount(account) }}>Delete</button> </td>
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
                                    <label>Recipe Name:</label>
                                    <input type="text" className="form-control" name="todoName" value={this.state.todoName} onChange={this.handleChange} />
                                    <p></p>
                                </div>
                                <div className="form-group">
                                    <label>from:</label>
                                    <input type="text" className="form-control" name="from" value={this.state.from} onChange={this.handleChange} />
                                    <p></p>
                                </div>
                                <div className="form-group">
                                    <label>to:</label>
                                    <input type="text" className="form-control" name="to" value={this.state.to} onChange={this.handleChange} />
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
