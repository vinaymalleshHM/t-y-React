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


    handleClose = async (account) => {
        // debugger
        // await this.setState({
        //     isShow: !this.state.isShow,
        //     ...account
        // })
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
        // debugger
        // if (this.state.id==='') {

        // await this.setState({
        //      isShow: !this.state.isShow,
        //      id:acctoEdit.id,
        //      ...acctoEdit
        //  })
        // console.log(this.state.isShow)
        // }
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
        const { pName, company, price, qty, proImg, description, medicineType } = this.state
        const acctoUpdate = {
            pName, company, price, qty, proImg, description, medicineType
        }
        const url = `https://react-medi.firebaseio.com/addproducts/${this.state.id}/.json`

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
            // console.log(this.state.showErrName)
        }
        else {
            await this.setState({
                pNameErr: true
            })
            // console.log(this.state.showErrName)
        }
        if (company.trim().match(/^[a-zA-Z ]*$/) && company !== '') {
            await this.setState({
                companyErr: false
            })
            // console.log(this.state.showErrEmail)
        }
        else {
            await this.setState({
                companyErr: true
            })
            // console.log(this.state.showErrEmail)
        }
        if (price.match(/^[0-9]*$/) && price !== '') {
            await this.setState({
                ...this.state,
                priceErr: false

            })
            // console.log(this.state.showErrMobile)
        }
        else {
            await this.setState({
                priceErr: true
            })
            // console.log(this.state.showErrMobile)
        }
        if (qty.match(/^[0-9]*$/) && qty !== '') {
            await this.setState({
                qtyErr: false
            })
            // console.log(this.state.showErrPass)
        }
        else {
            await this.setState({
                qtyErr: true
            })
            // console.log(this.state.showErrPass)
        }

        if (medicineType !== '') {
            await this.setState({
                medicineTypeErr: false
            })
            // console.log(this.state.showErrGender)
        }
        else {
            await this.setState({
                medicineTypeErr: true
            })
            // console.log(this.state.showErrGender)
        }
        if (proImg !== '') {
            await this.setState({
                proImgErr: false
            })
            // console.log(this.state.showErrGender)
        }
        else {
            await this.setState({
                proImgErr: true
            })
            // console.log(this.state.showErrGender)
        }
        if (description !== '') {
            await this.setState({
                descriptionErr: false
            })
            // console.log(this.state.showErrGender)
        }
        else {
            await this.setState({
                descriptionErr: true
            })
            // console.log(this.state.showErrGender)
        }
        this.sendCorrect()
    }

    sendCorrect = async () => {

        if (this.state.pNameErr !== true && this.state.companyErr !== true && this.state.priceErr !== true && this.state.qtyErr !== true && this.state.proImgErr !== true && this.state.descriptionErr !== true && this.state.medicineTypeErr !== true) {
            // const accDtaa = this.state.accounts.map(val => {
            //     console.log("val id", val.id)
            //     console.log("state", this.state.id)
            //     if (val.id === this.state.id) {
            //         val.pName = this.state.pName
            //         val.company = this.state.company
            //         val.price = this.state.price
            //         val.qty = this.state.qty
            //         val.description = this.state.description
            //         val.medicineType = this.state.medicineType
            //         this.saveData()

            //         this.handleClose(val);
            //         return val;
            //     }
            //     return val
            // })
            // await this.setState({
            //     accounts: accDtaa
            // })
            this.saveData();
            // this.handleClose(val);

            console.log(this.state.pName)
            console.log(this.state.company)
            console.log(this.state.price)
            console.log(this.state.qty)
            console.log(this.state.proImg)
            console.log(this.state.medicineType)
            console.log(this.state.description)
        }
        console.log(this.state.pName)
        console.log(this.state.company)
        console.log(this.state.price)
        console.log(this.state.qty)
        console.log(this.state.proImg)
        console.log(this.state.medicineType)
        console.log(this.state.description)
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
                                <th>company</th>
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
                                        // debugger
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
                                                <td>
                                                    <TextField id="standard-basic" name="company" value={this.state.company} onChange={this.handleChange} />
                                                    {this.state.companyErr ? <p style={{ color: "red" }}>should be Characters</p> : null}

                                                </td>
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
                                                <td>{account.company}</td>
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
                                                <td>{account.company}</td>
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
