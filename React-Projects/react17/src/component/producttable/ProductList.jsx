import React, { Component } from 'react'
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default class ProductList extends Component {
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
        pNameErr: false,
        companyErr: false,
        priceErr: false,
        qtyErr: false,
        proImgErr: false,
        descriptionErr: false,
        medicineTypeErr: false,
        isShow: false
    }

    componentDidMount() {
        this.getAllAccounts()
    }
    getAllAccounts = () => {
        // const url = 'https://react-medi.firebaseio.com/addproducts.json'
         const url = 'http://localhost:8080/searchall'
        Axios.get(url).then((response => {
            const fetchedAccount = []
            console.log(response.data.beans)
            for (const key in response.data.beans) {
                let account = response.data.beans[key]
                fetchedAccount.push({
                    ...account,
                    // id: key,
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
        // const url = 'https://react-medi.firebaseio.com/addproducts/' + id + '/.json'
        const url = `http://localhost:8080/update/${id}`

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


    handleClose = async (account) => {
        
        let accData = this.state.accounts;
        accData.map(acc => {
            if (acc.id === account.id) {
                return acc.isShow = false
            }
            return acc
        })
        await this.setState({
            accounts: accData,
            ...account
        })
    }
    handleShow = async (acctoEdit) => {
        console.log("Account to edit ", acctoEdit)
        
        let accData = this.state.accounts;
        accData.map(acc => {
            if (acc.id === acctoEdit.id) {
                return acc.isShow = true
            }
            return acc
        })
        await this.setState({
            accounts: accData,
            ...acctoEdit
        })
    }
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }


    saveData = async () => {
        const { id,pName, company, price, qty, proImg, description, medicineType } = this.state
        const acctoUpdate = {
            id,pName, company, price, qty, proImg, description, medicineType
        }
        // const url = `https://react-medi.firebaseio.com/addproducts/${this.state.id}/.json`
        const url = "http://localhost:8080/update"
        this.handleClose(val)
        const response = await Axios.put(url, acctoUpdate)
        if (response.status === 200) {
            // this.handleClose();
            this.state.accounts.map(val=> {
                if (val.id === this.state.id) {
                    // console.log(this.state.id)
                    val.pName = pName
                    val.company = company
                    val.price = price
                    val.qty = qty
                    val.proImg = proImg
                    val.description = description
                    val.medicineType = medicineType
                    this.handleClose(val)
                    return val
                }
            })
            this.setState({
                show: false,
                accounts: this.state.accounts
            })
        }
    }

    validForm = async () => {

        const { pName, company, price, qty, proImg, description, medicineType } = this.state
        if (pName.trim().match(/^[a-zA-Z ]*$/) && pName !== '') {
            await this.setState({
                pNameErr: false
            })
        }
        else {
            await this.setState({
                pNameErr: true
            })
        }
        if (company.trim().match(/^[a-zA-Z ]*$/) && company !== '') {
            await this.setState({
                companyErr: false
            })
        }
        else {
            await this.setState({
                companyErr: true
            })
        }
        if (String(price).match(/^[0-9]*$/) && String(price) !== '') {
            await this.setState({
                ...this.state,
                priceErr: false

            })
        }
        else {
            await this.setState({
                priceErr: true
            })
        }
        if (String(qty).match(/^[0-9]*$/) && String(qty) !== '') {
            await this.setState({
                qtyErr: false
            })
        }
        else {
            await this.setState({
                qtyErr: true
            })
        }

        if (medicineType !== '') {
            await this.setState({
                medicineTypeErr: false
            })
        }
        else {
            await this.setState({
                medicineTypeErr: true
            })
        }
        if (proImg !== '') {
            await this.setState({
                proImgErr: false
            })
        }
        else {
            await this.setState({
                proImgErr: true
            })
        }
        if (description !== '') {
            await this.setState({
                descriptionErr: false
            })
        }
        else {
            await this.setState({
                descriptionErr: true
            })
        }
        this.sendCorrect()
    }

    sendCorrect = async () => {

        if (this.state.pNameErr !== true && this.state.companyErr !== true && this.state.priceErr !== true && this.state.qtyErr !== true && this.state.proImgErr !== true && this.state.descriptionErr !== true && this.state.medicineTypeErr !== true) {
            
            this.saveData();

           
        }
       
    }


    renderDefaultView = (account) => {

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
                                {/* <th>company</th> */}
                                <th>price</th>
                                <th>qty</th>
                                <th>medicineType</th>
                                <th>description</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                this.state.isShow ? this.state.accounts.map((account) => {
                                    if (this.state.id === account.id) {
                                        return (<>
                                            <tr key={account.id}>
                                                <td>
                                                    <TextField id="standard-basic" name="proImg" value={this.state.proImg} onChange={this.handleChange} />
                                                    {this.state.proImgErr ? <p style={{ color: "red" }}>can't be empty</p> : null}
                                                </td>
                                                <td>
                                                    <TextField id="standard-basic" name="pName" value={this.state.pName} onChange={this.handleChange} />
                                                    {this.state.pNameErr ? <p style={{ color: "red" }}>should be character</p> : null}
                                                </td>
                                                {/* <td>
                                                    <TextField id="standard-basic" name="company" value={this.state.company} onChange={this.handleChange} />
                                                    {this.state.companyErr ? <p style={{ color: "red" }}>should be Characters</p> : null}

                                                </td> */}
                                                <td>
                                                    <TextField id="standard-basic" name="price" value={this.state.price} onChange={this.handleChange} />
                                                    {this.state.priceErr ? <p style={{ color: "red" }}>should be numbers</p> : null}
                                                </td>
                                                <td>
                                                    <TextField id="standard-basic" name="qty" value={this.state.qty} onChange={this.handleChange} />
                                                    {this.state.qtyErr ? <p style={{ color: "red" }}>should be numbers</p> : null}
                                                </td>
                                                <td>
                                                    <TextField id="standard-basic" name="medicineType" value={this.state.medicineType} onChange={this.handleChange} />
                                                    {this.state.medicineTypeErr ? <p style={{ color: "red" }}>can't be blank</p> : null}

                                                </td>
                                                <td>
                                                    <TextField id="standard-basic" name="description" value={this.state.description} onChange={this.handleChange} />
                                                    {this.state.descriptionErr ? <p style={{ color: "red" }}>should be numbers</p> : null}
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={this.validForm} >save</button> </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => this.handleClose(account)}>cancel</button>
                                                </td>
                                            </tr>
                                        </>)
                                    }
                                    else {
                                        return (<>
                                            <tr key={account.id}>
                                                <td><img src={account.proImg} height="35px" width="35px" alt="no img" /></td>
                                                <td>{account.pName}</td>
                                                {/* <td>{account.company}</td> */}
                                                <td>{account.price}</td>
                                                <td>{account.qty}</td>
                                                <td>{account.medicineType}</td>
                                                <td>{account.description}</td>
                                                <td><button className='btn btn-danger'>save</button> </td>
                                                <td><button className='btn btn-danger' onClick={() => { this.handleShow(account) }}>edit</button> </td>
                                            </tr>
                                        </>)
                                    }
                                })
                                    :
                                    this.state.accounts.map((account) => {
                                        return (<>
                                            <tr key={account.id}>
                                                <td><img src={account.proImg} height="35px" width="35px" alt="no img" /></td>
                                                <td>{account.pName}</td>
                                                {/* <td>{account.company}</td> */}
                                                <td>{account.price}</td>
                                                <td>{account.qty}</td>
                                                <td>{account.medicineType}</td>
                                                <td>{account.description}</td>
                                                <td><button className='btn btn-danger' onClick={() => { this.deleteAccount(account) }}>Delete</button> </td>
                                                <td><button className='btn btn-danger' onClick={() => { this.handleShow(account) }}>edit</button> </td>
                                            </tr>
                                        </>)


                                    })



                            }

                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}
