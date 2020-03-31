import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import UserContext from '../../context/userContext'

export default function ShowProduct(props) {

    const [receiveItem, setItems] = useState({all:[]})
    
    const [account, setAccont] = useState({ allData: [] })
   
    const [show, setShow] = useState(false)
    const mobile = localStorage.getItem('mobile')

    useEffect(() => {
        getAllAccounts()
    }, [])
 const context = useContext(UserContext)

    const getAllAccounts = async () => {
        const url = 'https://react-myshop-project.firebaseio.com/addproduct.json'
        try {
            const response = await Axios.get(url)

            let fetchedAccount = []
            for (let key in response.data) {
                let account = response.data[key]
                fetchedAccount.push({
                    ...account,
                    id: key
                })
                setItems({all:fetchedAccount})
            }
            searchProduct()
        }
        catch (err) {
            console.log("Erorr ", err)
        }
    }
    const searchProduct = (event) => {      
 console.log("con val ",context.input)
        const data = receiveItem.all.filter(val => val.productName.toLowerCase().includes(event))
        let arr = [];
        for (const key in data) {
            arr.push({
                ...data[key],
            })
        }
        if (arr) {
            setAccont({ allData: arr })
        
        } else {
            setAccont({ allData: [] })
        }
       
    }


    const addCart = async (acc) => {
            let accData = account.allData
            accData.map((val) => {
                if (val.id === acc.id) {
    
                    return acc.visible = true
                }
                return val
            })
            setAccont({ allData: accData })
            const cartItem = acc
            const url = `https://react-medi.firebaseio.com/addtoCart${mobile}.json`
            try {
    
                const response = await Axios.post(url, cartItem)
                if (response.status === 200) {
                    console.log('OK')
                    setShow(true)
                }
                else {
                    console.log("err")
                }
            }
            catch (err) {
                console.log('Err', err)
            }
    }

    return (
        <>

            <div className='container-fluid mt-3 col-md-4 col-sm-6 col-12'>
                <input className='form-control' type="text" placeholder='Search...' onChange={(e) => { searchProduct(e.target.value) }} />
            </div>
            {account.allData.map((acc) => {
            
                return (
                    <div className='container-fluid mt-4'>
                        <div className='col-md-3 col-sm-6 col-12 mt-2 card float-left'>
                            <div key={acc.id} className='card-body'>
                                <img className='card-img-top' width='100%' height='250px' src={acc.proImg} alt='No Image' ></img>
                                <p className='card-text'><h5>{acc.productName}</h5></p>
                                <p className='card-text'><h5>{acc.brand}</h5></p>
                                <p className='card-text'><h5>Rs. {acc.price}</h5></p>
                                <button className='btn btn-outline-primary ml-3'>Buy Now</button>
                                {acc.visible?<button className='btn btn-outline-success ml-2' disabled>Add to Cart</button>:<button className='btn btn-outline-success ml-2' onClick={() => { addCart(acc) }}>Add to Cart</button>}

                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

