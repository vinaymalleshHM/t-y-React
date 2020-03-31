import React, { useEffect, useState } from 'react'
import Axios from 'axios'


export default function AddCart(props) {
    const [receiveItem, setItems] = useState({ all: [] })
    const mobile = localStorage.getItem('mobile')


    useEffect(() => {
        getAllAccounts()
    }, [])

    const getAllAccounts = async () => {
        const url = `https://react-medi.firebaseio.com/addtoCart${mobile}.json`

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
        const url = `https://react-medi.firebaseio.com/addtoCart${mobile}/${id}/.json`

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

    const handleShow =async (length,amount) => {
        // setShow(!show)
localStorage.setItem('length',length)
localStorage.setItem('amount',amount)
           

receiveItem.all.map(val=>{

    const url = `https://react-medi.firebaseio.com/placeorder${mobile}.json`

    Axios.post(url,val).then((response) => {
        console.log("Success ", response)
        if (response.status === 200) {
            props.history.push("/check")
        }
    }).catch((err) => {
        console.log("Error ", err)
    })
})
        // props.history.push('/place')
       
       
        const url1 = `https://react-medi.firebaseio.com/addtoCart${mobile}.json`

        try {
             await Axios.delete(url1)
            const myAccounts = [...receiveItem.all]
            
            myAccounts.splice(0,receiveItem.all.length )

            setItems({ all: myAccounts })
        } catch (error) {
            console.log('Error ', error)
        }
        
    }


    let tc = 0;
    return (
        <>
            <div className="container-fluid " >
                <div className="row">
                    <div className="col-md-6">
                        <h3 className='text-center offset-1'>Cart List</h3>
                        {receiveItem.all.map((acc) => {
                            return (
                                <div className='col-md-12 mt-4'>
                                    <div className='col-md-6 col-sm-8 col-12 mt-2 card'>
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

                                                        <option disable>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <p className='card-text'><h5>Rs. {acc.price}</h5></p>
                                            <p className='card-text'><h5>total Rs.{acc.totalPrice}</h5></p>
                                            {
                                                <p style={{ display: 'none' }}>{tc = tc + Number(acc.totalPrice)}</p>
                                            }

                                            <button className='btn btn-danger ml-3' onClick={() => handleRemove(acc)}>Remove  <i className="fa fa-trash"></i></button>


                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="col-md-6">
                        <div className='col-md-8 mt-2'>
                            <h3 className='text-center'>Cart Details</h3>
                            <div className='card-body'>
                                <p className='card-text'><h5>items  :  {receiveItem.all.length}</h5></p>
                                <p className='card-text'><h5>Delivery Fee :  Free</h5></p>
                                <p className='card-text'><h5>Payable Amount : {tc}</h5></p>
                                <button className='btn btn-outline-success ml-2' onClick={()=>handleShow(receiveItem.all.length,tc)}>Place order</button>
                            </div>
                            {/* {show ? <Billing data={{ state: tc, length: receiveItem.all.length }} /> : null} */}
                        </div>
                    </div>

                </div>
            </div>





        </>
    )
}
