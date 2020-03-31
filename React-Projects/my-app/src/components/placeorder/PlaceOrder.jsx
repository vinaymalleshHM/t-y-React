import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function PlaceOrder() {
    const mobile = localStorage.getItem('mobile')
    const length = localStorage.getItem('length')
    const amount = localStorage.getItem('amount')

    const [receiveItem, setItems] = useState({ all: [] })
    useEffect(() => {
        getAllAccounts()
    }, [])

    const getAllAccounts = async () => {
        const url = `https://react-myshop-project.firebaseio.com/placeorder${mobile}.json`

        try {
            const response = await Axios.get(url)
            // console.log(response)
            let fetchedAccount = []
            for (let key in response.data) {
                let account = response.data[key]
                fetchedAccount.push({
                    ...account,
                    id: key,
                    qty: null,
                    totalPrice: account.price
                })
                setItems({ all: fetchedAccount })
            }
        }
        catch (err) {
            console.log("Erorr ", err)
        }
       
    }

    return (
        <div>
            <div className="container-fluid " >
                <div className="row">
                    <div className="col-md-6">
                        <h3 className='text-center offset-1'>Placed Orders</h3>

                        {receiveItem.all.map((acc) => {
                            console.log(acc)
                            return (
                                <div className='col-md-12 mt-4'>
                                    <div className='col-md-6 col-sm-8 col-12 mt-2 card'>
                                        <div key={acc.id} className='card-body'>
                                            <img className='card-img-top' width='100%' height='250px' src={acc.proImg} alt='No Image' ></img>
                                            <p className='card-text'><h6>{acc.productName}</h6></p>
                                            <p className='card-text'><h6>{acc.brand}</h6></p>
                                            <p className='card-text'><h6>{acc.totalPrice}</h6></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="col-md-6">
                        <div className='col-md-8 mt-2'>
                            <h3 className='text-center'>Order Details</h3>
                            <div className='card-body'>
                                <p className='card-text'><h5>itotal tems :  {receiveItem.all.length}</h5></p>
                                <p className='card-text'><h5>Free Delivery</h5></p>
                                {/* <p className='card-text'><h5>Paid Amount : {amount}</h5></p> */}
                    
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
