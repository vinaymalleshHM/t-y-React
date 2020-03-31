import React, { Component } from 'react'
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const accountsId=[];
export default class Test extends Component {
    state = {
        accounts: [],
        pName: '',
        company: '',
        price: '',
        qty: '',
        proImg: '',
        description: '',
        medicineType: '',
        id: "",
        // isShow:false
    }


    componentDidMount() {
        this.getAllAccounts()
    }
    getAllAccounts = () => {
        const url = 'https://react-medi.firebaseio.com/addproducts.json'
        Axios.get(url).then((response => {
            // console.log("Response ", response)
            const fetchedAccount = []
            for (const key in response.data) {
                let account = response.data[key]
                fetchedAccount.push({
                    ...account,
                    id: key,
                })

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
        const url = 'https://react-medi.firebaseio.com/addproducts/' + id + '/.json'

        try {
            const response = await Axios.delete(url)
            const myAccounts = [...this.state.accounts]
            const index = myAccounts.indexOf(accToDelete)
            myAccounts.splice(index, 1)
            this.setState({
                accounts: myAccounts
            })
            console.log('Response ', response)
        } catch (error) {
            console.log('Error ', error)
        }
    }


   
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }


    saveData = async () => {
        const { pName, company, price, qty, proImg, description, medicineType } = this.state
        const acctoUpdate = {
            pName, company, price, qty, proImg, description, medicineType
        }
        const url = `https://react-medi.firebaseio.com/addproducts/${this.state.id}/.json`

        const response = await Axios.put(url, acctoUpdate)
        if (response.status === 200) {
            this.handleClose();
            this.state.accounts.map((val, index) => {
                if (val.id === this.state.id) {
                    val.pName = pName
                    val.company = company
                    val.price = price
                    val.qty = qty
                    val.proImg = proImg
                    val.description = description
                    val.medicineType = medicineType
                    return val
                }
            })
            this.setState({
                show: false,
                accounts: this.state.accounts
            })
        }
    }

    handleClose = async (account) => {
        await this.setState({
            isShow: !this.state.isShow,
            ...account
        })
    }
    
    handleShow = async (acctoEdit) => {
        console.log("Account to edit ", acctoEdit)
        
        let accData = this.state.accounts;
        accData.map(acc => {
            if (acc.id === acctoEdit.id) {
                return acc.isShow = !acc.isShow
            }
                    return acc
        })
            await this.setState({
                accounts:accData,
                ...acctoEdit
            })
            accountsId.push(acctoEdit.id);
            console.log("stateId",accountsId)
            console.log("acc id",acctoEdit.id)
    }

    render() {
        return (

            <>
                <div className='table-responsive container-fluid'>
                    <table className="table table-striped table-hover mt-5 table-bordered">
                        <thead className='thead-dark'>
                            <tr>
                                <th>Img</th>
                                <th>Product Name</th>
                                <th>company</th>
                                <th>price</th>
                                <th>qty</th>
                                <th>description</th>
                                <th>medicineType</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                this.state.accounts.map((account) => {
                                    if (account.isShow) {
                                        // accountsId.map((id) =>{
                                        // for (let index = 0; index < accountsId.length; index++) {
                                            
                                        if (this.state.id === account.id ) {
                                            
                                            return(
                                            <tr key={account.id}>
                                                <td><img src={this.state.proImg} height="35px" width="35px" alt="no img" /></td>
                                                <td><TextField id="standard-basic" label="productName" name="pName" value={this.state.pName} /></td>
                                                <td><TextField id="standard-basic" label="company" name="company" value={this.state.company} /></td>
                                                <td><TextField id="standard-basic" label="price" name="pName" value={this.state.price} /></td>
                                                <td><TextField id="standard-basic" label="qty" name="price" value={this.state.qty} /></td>
                                                <td><TextField id="standard-basic" label="medicineType" name="qty" value={this.state.medicineType} /></td>
                                                <td><TextField id="standard-basic" label="description" name="description" value={this.state.description} /></td>
                                                <td><button className='btn btn-danger' >save</button> </td>
                                                <td><button className='btn btn-danger' onClick={() => this.handleClose(account)}>cancel</button> </td>
                                            </tr>
                                        )
                                            }
                                            else{
                                                return(<tr key={account.id}>
                                                    <td><img src={account.proImg} height="35px" width="35px" alt="no img" /></td>
                                                    <td>{account.pName}</td>
                                                    <td>{account.company}</td>
                                                    <td>{account.price}</td>
                                                    <td>{account.qty}</td>
                                                    <td>{account.medicineType}</td>
                                                    <td>{account.description}</td>
                                                    <td><button className='btn btn-danger' onClick={() => {this.deleteAccount(account) }}>Delete</button> </td>
                                                    <td><button className='btn btn-danger' onClick={() => {this.handleShow(account) }}>edit</button> </td>
                                                </tr>)
                                            }
                                        // })
                                    }
                                    else{
                                        return(<tr key={account.id}>
                                                <td><img src={account.proImg} height="35px" width="35px" alt="no img" /></td>
                                                <td>{account.pName}</td>
                                                <td>{account.company}</td>
                                                <td>{account.price}</td>
                                                <td>{account.qty}</td>
                                                <td>{account.medicineType}</td>
                                                <td>{account.description}</td>
                                                <td><button className='btn btn-danger' onClick={() => {this.deleteAccount(account) }}>Delete</button> </td>
                                                <td><button className='btn btn-danger' onClick={() => {this.handleShow(account) }}>edit</button> </td>
                                            </tr>)
                                        }

                                    })



                            }

                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}
