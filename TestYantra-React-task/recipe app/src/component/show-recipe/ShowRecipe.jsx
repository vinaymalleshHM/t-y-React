import React, { Component } from 'react'
import Axios from 'axios'
import RecipeDetails from '../recipedetails/Recipedetails'
import { Button, Modal } from 'react-bootstrap'

export default class ShowRecipe extends Component {
    state = {
        recipeName: '',
        recipeImg: '',
        recipeIng: '',
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
        const url = 'https://react-recipe-project.firebaseio.com/recipeaccounts.json'
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

        const url = `https://react-recipe-project.firebaseio.com/recipeaccounts/${id}/.json`

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
        const { recipeName, recipeImg, recipeIng } = this.state
        const acctoUpdate = {

            recipeName, recipeImg, recipeIng
        }
        const url = `https://react-recipe-project.firebaseio.com/recipeaccounts/${this.state.id}/.json`

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
                    val.recipeName = this.state.recipeName
                    val.recipeImg = this.state.recipeImg
                    val.recipeIng = this.state.recipeIng
                    // })
                }


            })
            this.setState({
                recipies: this.state.recipies
            })
            // userName,emailId,mobileNo,password
            // const updateAccount = [...this.state.account]
            // for (let i in updateAccount){
            //    if( updateAccount[i].id === this.state.id){
            //     updateAccount[i].userName =userName;
            //     updateAccount[i].emailId =emailId;
            //     updateAccount[i].mobileNo =mobileNo;
            //     updateAccount[i].password =password;
            //     break;
            //    }
            // }
            // console.log("Solution 1 account ",updateAccount)
            // this.setState({
            //             accounts :updateAccount
            //         })

        }
    }



    render() {
        return (
            <div className='row'>
                <div className='col-md-6'>
                {
                    this.state.recipies.map((account) => {

                        return (
                            <div key={account.id} className='card col-md-8 ' >
                                <div className='card-body'>
                                    <img className='card-img-top' onClick={() => this.recipeDetails(account)} src={account.recipeImg} width='100%' alt="img not available" />
                                    <p className='card-text'><b>RecipeName : </b>{account.recipeName}</p>
                                    <p className='card-text'><b>Ingredients : </b>{account.recipeIng}</p>
                                    <button className='btn btn-danger' onClick={() => { this.deleteRecipies(account) }}>Delete</button>
                                    <button className='btn btn-success offset-2' onClick={() => this.handleShow(account)} >Edit</button>
                                </div>
                            </div>)
                    })

                }
                </div>
                <div className='col-md-6'>
                    {

                        this.state.showit ? <div className='col-md-8'><RecipeDetails data={this.state.details} /> </div>: null}
                    }
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
                                        <input type="text" className="form-control" name="recipeName" value={this.state.recipeName} onChange={this.handleChange} />
                                        <p></p>
                                    </div>
                                    <div className="form-group">
                                        <label>recipeImg:</label>
                                        <input type="text" className="form-control" name="recipeImg" value={this.state.recipeImg} onChange={this.handleChange} />
                                        <p></p>
                                    </div>
                                    <div className="form-group">
                                        <label>recipeIng:</label>
                                        <input type="text" className="form-control" name="recipeIng" value={this.state.recipeIng} onChange={this.handleChange} />
                                        <p ></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
          </Button>
                        <Button variant="primary" onClick={() => this.saveData()}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }

}
