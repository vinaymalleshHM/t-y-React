import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Modal } from 'react-bootstrap'

export default class ShowToDoList extends Component {
    state = {
        todoName: '',
        from: '',
        to: '',
        todolists: [],
        show: false,
        showit: false,
        details: [],
        id: null
    }

    componentDidMount() {
        this.getAllRecipies()
    }
    getAllRecipies = () => {
        const url = 'https://react-todo-project-1db5c.firebaseio.com/todoaccounts.json'
        Axios.get(url).then((response => {
            console.log("Response ", response)
            const fetchedRecipies = []
            for (const key in response.data) {
                let recipe = response.data[key]
                fetchedRecipies.push({
                    ...recipe,
                    id: key
                })
                console.log('Accounts ', fetchedRecipies)
                this.setState({
                    todolists: fetchedRecipies
                })
            }

        })).catch((err) => {
            console.log('Error ', err)
        })
    }

    async deleteAccount(accToDelete) {
        console.log("Account to be deleted ", accToDelete)
        const id = accToDelete.id

        const url = `https://react-todo-project-1db5c.firebaseio.com/todoaccounts/${id}/.json`

        try {
            const response = await Axios.delete(url)
            const myAccounts = [...this.state.todolists]
            const index = myAccounts.indexOf(accToDelete)
            myAccounts.splice(index, 1)
            this.setState({
                todolists: myAccounts
            })
        } catch (error) {
            console.log('Error ', error)
        }
    }

    recipeDetails = (display) => {
        console.log(display)
        this.setState({
            showit: !this.state.showit,
            details: display,

        })
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
        const { todoName, from, to } = this.state
        const acctoUpdate = {

            todoName,from,to
        }
        const url = `https://react-todo-project-1db5c.firebaseio.com/todoaccounts/${this.state.id}/.json`

        const response = await Axios.put(url, acctoUpdate)
        console.log("Response ", response)
        if (response.status === 200) {

            this.handleClose();
            this.state.todolists.map((val, index) => {
                
                if (val.id === this.state.id) {                   
                    val.todoName = this.state.todoName
                    val.from = this.state.from
                    val.to = this.state.to
                   
                }
            })
            this.setState({
                todolists: this.state.todolists
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
                                <th>Task Name</th>
                                <th>Email From</th>

                                <th>Email To</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.todolists.map((account) => {

                                    return (
                                        <tr key={account.id}>
                                            <td>{account.todoName}</td>
                                            <td>{account.from}</td>
                                            <td>{account.to}</td>
                                            <td><button className='btn btn-danger' onClick={() => { this.deleteAccount(account) }}>Delete</button> </td>
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