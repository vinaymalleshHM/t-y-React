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
        const url = 'https://react-app-b4565.firebaseio.com/accounts.json'
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
        const url = 'https://react-app-b4565.firebaseio.com/accounts/'+ id +'/.json'

        try {
            const response = await Axios.delete(url)
            const myAccounts =[...this.state.accounts]
            const index = myAccounts.indexOf(accToDelete)
            myAccounts.splice(index,1)
            this.setState({
                accounts : myAccounts
            })
            console.log('Response ',response)
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
        console.log("Account to edit ",acctoEdit)
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

    
    saveData = async ()=>{
        console.log("State Data ",this.state)
        const {userName,emailId,mobileNo,password} =this.state
        const acctoUpdate = {
            userName,emailId,mobileNo,password
        }
        const url = `https://react-app-b4565.firebaseio.com/accounts/${this.state.id}/.json`

       const response = await Axios.put(url,acctoUpdate)
       console.log("Response ",response)
       if(response.status ===200){
        //    this.setState({
        //        show :false
        //    })
        this.handleClose();
    //     this.state.accounts.map((val,index)=>{
    //       //  console.log('val id ',val.id)
            
    //        if(val.id===this.state.id){
    //            console.log(this.state.id)
    //const {userName,emailId,mobileNo,password} =val
              
    //             // this.setState({
    //                 // val.userName = this.state.userName
    //                 // val.emailId = this.state.emailId
    //                 // val.mobileNo = this.state.mobileNo
    //                 // val.password = this.state.password
    //             // })
    //        }


    //     })
    //     // this.setState({
    //     //     accounts :this.state.accounts
    //     // })
    // userName,emailId,mobileNo,password
        const updateAccount = [...this.state.account]
        for (let i in updateAccount){
           if( updateAccount[i].id === this.state.id){
            updateAccount[i].userName =userName;
            updateAccount[i].emailId =emailId;
            updateAccount[i].mobileNo =mobileNo;
            updateAccount[i].password =password;
            break;
           }
        }
        console.log("Solution 1 account ",updateAccount)
        this.setState({
                    accounts :updateAccount
                })
       
    }
}
    

    render() {
        return (
            <div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>

                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Dimple</td>
                            <td>Dimple@.gamil.com</td>
                    
                            <td>34546114522</td>
                        </tr>
                        <tr>
                            <td>Dinga</td>
                            <td>Dinga@.gamil.com</td>
                          
                            <td>4223695264</td>
                        </tr>
                        <tr>
                            <td>Pimple</td>
                            <td>Pimple@.gamil.com</td>
                           
                            <td>1355335835</td>
                        </tr>
                        <tr>
                            <td>Dingi</td>
                            <td>Dingi@.gamil.com</td>
                            
                            <td>789546322</td>
                        </tr> */}
                        {
                            this.state.accounts.map((account) => {

                                return (<tr key={account.id}>
                                    <td>{account.userName}</td>
                                    <td>{account.emailId}</td>
                                    {/* <td>{val.password}</td> */}
                                    <td>{account.mobileNo}</td>
                                    <button className='btn btn-danger' onClick={() => { this.deleteAccount(account) }}>Delete</button>
                                    <button className='btn btn-success offset-2' onClick={() => this.handleShow(account)}>Edit</button>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <Modal show={this.state.show} onHide={() => this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="card">
                            <div className="card-body">
                        
                                <form className="form-group" onSubmit={this.saveData}>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" className="form-control" name="userName" value={this.state.userName} onChange={this.handleChange} />
                                        <p ></p>
                                    </div>
                                    <div className="form-group">
                                        <label>Email ID:</label>
                                        <input type="text" className="form-control" name="emailId" value={this.state.emailId} onChange={this.handleChange} />
                                        <p></p>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile No:</label>
                                        <input type="text" className="form-control" name="mobileNo" value={this.state.mobileNo} onChange={this.handleChange} />
                                        <p ></p>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
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
