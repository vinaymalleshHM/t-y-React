import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Billing from '../billing/Billing'

export default function AddCart(props) {
    const [receiveItem, setItems] = useState({ all: [] })
    const [qty, setQty] = useState('')
    const [show, setShow] = useState(false)
    
    const mobile = localStorage.getItem('mobile')
    

    useEffect(() => {
        getAllAccounts()
    }, [])

    const getAllAccounts = async () => {
        const url = `https://react-myshop-project.firebaseio.com/addtoCart${mobile}.json`

        try {
            const response = await Axios.get(url)

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


    const handleRemove = async (accToDelete) => {

        console.log("Account to be deleted ", accToDelete.id)
        const id = accToDelete.id
        const url = `https://react-myshop-project.firebaseio.com/addtoCart${mobile}/${id}/.json`

        try {
            const response = await Axios.delete(url)
            const myAccounts = [...receiveItem.all]
            const index = myAccounts.indexOf(accToDelete)
            myAccounts.splice(index, 1)

            setItems({ all: myAccounts })

            console.log('Response ', response)

        } catch (error) {
            console.log('Error ', error)
        }

    }

    const searchProduct = (event, acc) => {
        console.log("eve", event)

        // const {price}=acc

        let accData = receiveItem.all
        accData.map((val) => {
            if (val.id === acc.id) {

                return (acc.qty = event, acc.totalPrice = event * acc.price)
            }
            else {

                return acc
            }
        })

        setItems({ all: accData })

    }

    const handleShow=()=>{
        setShow(!show)
        // props.history.push('/bill')
    }



    let tc = 0;
    return (
        <>
            <div className='row'>
                <div className='com-md-6'>
                    <h3 className='text-center'>Cart List</h3>

                    {receiveItem.all.map((acc) => {
                        return (
                            <div className='container-fluid mt-4'>
                                <div className='col-md-8 col-sm-8 col-12 mt-2 card float-left'>
                                    <div key={acc.id} className='card-body'>
                                        <img className='card-img-top' width='100%' height='250px' src={acc.proImg} alt='No Image' ></img>
                                        <p className='card-text'><h5>{acc.productName}</h5></p>
                                        <p className='card-text'><h5>{acc.brand}</h5></p>
                                        <div className="row">
                                            <div className='col-md-6'>
                                                <h5 className="form-label">quantity</h5>
                                            </div>

                                            <div className='col-md-6'>
                                                <select className="form-control" name="qty" value={acc.qty} onChange={(e) => searchProduct(e.target.value, acc)}>
                                                    <option disable>Choose</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <p className='card-text'><h5>Rs. {acc.price}</h5></p>
                                        <p className='card-text'><h5>total Rs.{acc.totalPrice}</h5></p>
                                        {
                                            tc = tc + Number(acc.totalPrice)
                                        }

                                        <button className='btn btn-danger ml-3' onClick={() => handleRemove(acc)}>Remove  <i className="fa fa-trash"></i></button>


                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                <div className='col-md-6 mt-2'>
                <h3 className='text-center'>Cart Details</h3>
                    <div className='card-body'>
                        <p className='card-text'><h5>items  :  {receiveItem.all.length}</h5></p>
                        <p className='card-text'><h5>Delivery Fee :  Free</h5></p>
                        <p className='card-text'><h5>Payable Amount : {tc}</h5></p>
                        <button className='btn btn-outline-success ml-2' onClick={handleShow}>Place order</button>
                    </div>
            {show? <Billing data={{state:tc,length:receiveItem.all.length}}/>:null}
                </div>
            </div>

        </>
    )
}
