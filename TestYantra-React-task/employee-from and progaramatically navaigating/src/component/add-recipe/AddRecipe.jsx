import React, { Component } from 'react'
import Axios from 'axios'

export default class AddRecipe extends Component {

    state = {
        recipeName:'',
        recipeImg:'',
        recipeIng:'',
        accounts: [],
        fields: {},
        errors: {}
    }
    handleChange1 = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    handleChange = (event) => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            [event.target.name]: event.target.value,
            fields
        })
    }

    submituserRegistrationForm = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["recipeName"] = "";
            fields["recipeImg"] = "";
            fields["recipeIng"] = "";
            this.setState({ fields: fields });

        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["recipeName"]) {
            formIsValid = false;
            errors["recipeName"] = "*Please enter your recipeName.";
        }

        if (typeof fields["recipeName"] !== "undefined") {
            if (!fields["recipeName"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["recipeName"] = "*Please enter valid characters.";
            }
        }

        if (!fields["recipeImg"]) {
            formIsValid = false;
            errors["recipeImg"] = "*Please enter your recipeImgpath.";
        }

        if (typeof fields["recipeImg"] !== "undefined") {
            if (!fields["recipeImg"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["recipeImg"] = "*Please enter valid Impage path.";
            }
        }
        if (!fields["recipeIng"]) {
            formIsValid = false;
            errors["recipeIng"] = "*Please enter your recipeImgpath.";
        }

        if (typeof fields["recipeIng"] !== "undefined") {
            if (!fields["recipeIng"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["recipeIng"] = "*Please enter valid Impage path.";
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

        const url = 'https://react-recipe-project.firebaseio.com/recipeaccounts.json'
        Axios.post(url, formData).then((response) => {
            console.log("Success ", response)
            if (response.status === 200) {
                this.setState({
                    recipeName: '',
                    recipeImg: '',
                    recipeIng: ''
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
                        <h3 className="card-title offset-3">Recipe Form</h3>
                        <form className="form-group" onSubmit={this.saveData}>
                            <div className="form-group">
                                <label>Recipe Name:</label>
                                <input type="text" className="form-control" name="recipeName" value={this.state.recipeName} onChange={this.handleChange} />
                                <p ></p>
                            </div>
                            <div className="form-group">
                                <label>Image Path:</label>
                                <input type="text" className="form-control" name="recipeImg" value={this.state.recipeImg} onChange={this.handleChange} />
                                <p ></p>
                            </div>
                            <div className="form-group">
                                <label>Ingredients</label>
                                <input type="text" className="form-control" name="recipeIng" value={this.state.recipeIng} onChange={this.handleChange} />
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