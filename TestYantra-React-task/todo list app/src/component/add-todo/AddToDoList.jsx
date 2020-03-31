import React, { Component } from 'react'
import Axios from 'axios'

export default class AddToDoList extends Component {

    state = {
        todoName: '',
        from: '',
        to: '',
        accounts: [],
        fields: {},
        errors: {}
    }
    // handleChange1 = (e) => {
    //     let fields = this.state.fields;
    //     fields[e.target.name] = e.target.value;
    //     this.setState({
    //         fields
    //     });
    // }

    handleChange = (event) => {
        // let fields = this.state.fields;
        // fields[event.target.name] = event.target.value;
        this.setState({
            [event.target.name]: event.target.value,
            // fields
        })
    }

    submituserRegistrationForm = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["todoName"] = "";
            fields["from"] = "";
            fields["to"] = "";
            this.setState({ fields: fields });

        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["todoName"]) {
            formIsValid = false;
            errors["todoName"] = "*Please enter your TaskName.";
        }

        if (typeof fields["todoName"] !== "undefined") {
            if (!fields["todoName"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["todoName"] = "*Please enter valid characters.";
            }
        }
        if (!fields["from"]) {
            formIsValid = false;
            errors["from"] = "*Please enter from.";
        }

        if (typeof fields["from"] !== "undefined") {
            if (!fields["from"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["from"] = "*Please enter valid characters.";
            }
        }
        if (!fields["to"]) {
            formIsValid = false;
            errors["to"] = "*Please enter to.";
        }

        if (typeof fields["to"] !== "undefined") {
            if (!fields["to"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["to"] = "*Please enter valid characters.";
            }
        }
        this.setState({
            errors: errors
        });

        this.saveData()
        return formIsValid;


    }


    saveData = (event) => {
        event.preventDefault()
        console.log("Form Data ", this.state)
        const formData = this.state;

        const url = 'https://react-todo-project-1db5c.firebaseio.com/todoaccounts.json'
        Axios.post(url, formData).then((response) => {
            console.log("Success ", response)
            if (response.status === 200) {
                this.setState({
                    todoName: '',
                    from: '',
                    to: ''
                })
            }
        }).catch((err) => {
            console.log("Error ", err)

        })

    }



    render() {
        return (
            <>
                <div className="card col-md-4 offset-4 mt-5">
                    <div className="card-body">
                        <h3 className="card-title offset-3">ToDo Form</h3>
                        <form className="form-group" onSubmit={this.saveData}>
                            <div className="form-group">
                                <label>Task Name:</label>
                                <textarea className="form-control" name="todoName" value={this.state.todoName} onChange={this.handleChange} />
                                <p></p>
                            </div>
                            <div className="form-group">
                                <label>From:</label>
                                <input type="text" className="form-control" name="from" value={this.state.from} onChange={this.handleChange} />
                                <p></p>
                            </div>
                            <div className="form-group">
                                <label>To:</label>
                                <input type="text" className="form-control" name="to" value={this.state.to} onChange={this.handleChange} />
                                <p></p>
                            </div>
                            <input type="submit" className="btn btn-primary offset-4 mt-3" value="AddTodo" />
                        </form>
                    </div>
                </div>
            </>
        )
    }


}