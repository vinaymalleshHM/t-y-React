import React, { Component } from 'react'

export default class componentName extends Component {
    state = {
        accounts: [],
        pName: '',
        company: '',
        price: '',
        qty: '',
        proImg: '',
        description: '',
        medicineType: ''
    }

    componentDidMount() {
        this.getAllAccounts()
    }
    getAllAccounts = () => {
        const url = 'https://react-medi.firebaseio.com/addproducts.json'
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
        const { pName, company, price, qty ,proImg,description,medicineType} = this.state
        const acctoUpdate = {
            pName, company, price, qty ,proImg,description,medicineType
        }
        const url = `https://react-medi.firebaseio.com/addproducts/${this.state.id}/.json`

        const response = await Axios.put(url, acctoUpdate)
        if (response.status === 200) {
            this.handleClose();
            this.state.accounts.map((val, index) => {
                if (val.id === this.state.id) {
                    // console.log(this.state.id)
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

                                return (
                                    <tr key={account.id}>
                                        <td><img src="{account.proImg}"  height="35px" width="35px"   alt="no img"/></td>
                                        <td>{account.pName}</td>
                                        <td>{account.email}</td>
                                        <td>{account.mobile}</td>
                                        <td>{account.price}</td>
                                        <td>{account.qty}</td>
                                        <td>{account.medicineType}</td>
                                        <td>{account.description}</td>
                                        <td><button className='btn btn-danger' onClick={() => { this.deleteAccount(account) }}>Delete</button> </td>
                                    </tr>)
                            })

                        }
                    </tbody>
                </table>
            </div> 
            </>
        )
    }
}
