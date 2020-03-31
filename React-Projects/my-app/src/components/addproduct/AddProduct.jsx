import React, { Component } from 'react'
import Axios from 'axios';

export default class AddProduct extends Component {


    state = {
        productName: '',
        brand: '',
        price: '',
        noPro: '',
        proImg: '',
        productNameErr: false,
        brandErr: false,
        priceErr: false,
        noProErr: false,
        imgErr: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validForm = async (event) => {
        event.preventDefault()

        const { productName, brand, price, noPro, proImg } = this.state
        if (productName.trim().match(/^[a-zA-Z ]*$/) && productName !== '') {
            await this.setState({
                productNameErr: false

            })
            // console.log(this.state.productNameErr)
        }
        else {

            await this.setState({
                productNameErr: true

            })
            // console.log(this.state.productNameErr)

        }

        if (brand.trim().match(/^[a-zA-Z ]*$/) && productName !== '') {
            await this.setState({
                brandErr: false

            })
            // console.log(this.state.brandErr)

        }
        else {

            await this.setState({
                brandErr: true

            })
            // console.log(this.state.brandErr)
        }
        if (price.trim().match(/^[0-9]/)) {
            await this.setState({
                priceErr: false

            })
            // console.log(this.state.priceErr)
        }
        else {

            await this.setState({
                priceErr: true

            })

            // console.log(this.state.showErrMobile)

        }

        if (noPro.match(/^[0-9]/) && noPro !== "") {
            await this.setState({
                noProErr: false

            })

            // console.log(this.state.noProErr)

        }
        else {

            await this.setState({
                noProErr: true

            })

            // console.log(this.state.noProErr)

        }
        if (proImg !== '') {
            await this.setState({
                imgErr: false

            })
            // console.log(this.state.imgErr)
        }
        else {

            await this.setState({
                imgErr: true

            })

            // console.log(this.state.showErrDdrop)

        }
        this.sendCorrect()
    }

    sendCorrect = () => {
        if (this.state.productNameErr !== true && this.state.brandErr !== true && this.state.priceErr !== true && this.state.noProErr !== true && this.state.imgErr !== true) {

            // console.log('hj', this.state.productNameErr)
            // console.log('hj', this.state.brandErr)
            // console.log('hj', this.state.priceErr)
            // console.log('hj', this.state.noProErr)
            // console.log('hj', this.state.imgErr)

            this.saveData()
        }
    }

    saveData = async () => {
        //event.preventDefault()
        const data = {
            productName: this.state.productName,
            brand: this.state.brand,
            price: this.state.price,
            noPro: this.state.price,
            proImg: this.state.proImg,
        }
        const formData = data
        
        // const url = 'https://react-myshop-project.firebaseio.com/addproduct.json'
        const url = 'http://localhost:8080/shopingapp/addproduct'

        Axios.post(url, formData).then((response) => {
            console.log("Success ", response)
            if (response.status === 200) {

                this.setState({
                    productName: '',
                    brand: '',
                    price: '',
                    noPro: '',
                    proImg: '',
                    productNameErr: false,
                    brandErr: false,
                    priceErr: false,
                    noProErr: false,
                    imgErr: false
                })
                // this.props.history.push('/login')
            }
        }).catch((err) => {
            console.log("Error ", err)

        })

    }

    render() {
        return (
            <div className="col-md-6 col-sm-6 col-6 offset-3 card card-body mt-5">
                <form onSubmit={this.validForm}>
                    <legend className='text-center'><b>Add Product</b></legend><br></br>
                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label">Product Name</label>
                        <div class="col-sm-8">
                            <input name="productName"
                                className="form-control" type="text"
                                value={this.state.productName}
                                placeholder="Enter Product"
                                onChange={this.handleChange} />
                            {this.state.productNameErr ? <p style={{ color: 'red', fontSize: '12px' }}>Enter only Characters</p> : null}
                        </div>
                    </div>

                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label">Brand</label>
                        <div class="col-sm-8">
                            <input name="brand"
                                className="form-control" type="text"
                                value={this.state.brand}
                                onChange={this.handleChange}
                                placeholder="Enter Brand" />
                            {this.state.brandErr ? <p style={{ color: 'red', fontSize: '12px' }}>Allowed Only Letters</p> : null}
                        </div>
                    </div>

                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label">Price</label>
                        <div class="col-sm-8">
                            <input name="price"
                                className="form-control" type="text"
                                placeholder="Enetr Price"

                                value={this.state.price}
                                onChange={this.handleChange} />
                            {this.state.priceErr ? <p style={{ color: 'red', fontSize: '12px' }}>Only numbers</p> : null}
                        </div>
                    </div>

                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label">No of Quantity</label>
                        <div class="col-sm-8" >
                            <input type="text" name="noPro"
                                className="form-control"

                                placeholder="Number of quantity"
                                value={this.state.noPro}
                                onChange={this.handleChange} />
                            {this.state.noProErr ? <p style={{ color: 'red', fontSize: '12px' }}>Enter numbers only</p> : null}
                        </div>
                    </div>

                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label">Image Path</label>
                        <div class="col-sm-8">
                            <input name="proImg"
                                className="form-control" type="text"
                                placeholder="Give image Path"

                                onChange={this.handleChange}
                                value={this.state.proImg} />
                            {this.state.imgErr ? <p style={{ color: 'red', fontSize: '12px' }}>Enter proper Image Path</p> : null}
                        </div>
                    </div>

                    <button className="btn btn-outline-info col-sm-6 col-6 col-md-6 offset-3 mt-3" id="login" type="submit">Add Product</button>
                </form>
            </div>
        )
    }
}