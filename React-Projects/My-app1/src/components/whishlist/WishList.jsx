import React, { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'

export default function WishList() {

    const [receiveItem, setItems] = useState({ all: [] })
    const mobile = localStorage.getItem('mobile')
 
    useEffect(() => {

        getAllAccounts()

    }, [])

    let getAllAccounts = async () => {
        const url = `https://react-myshop-project.firebaseio.com/wishList${mobile}.json`
        try {
            const response = await Axios.get(url)
            
            let fetchedAccount = []  
            for (let key in response.data) {
                let account = response.data[key]

                fetchedAccount.push({
                    ...account,
                    id: key
                })
                setItems({ all: fetchedAccount }) // setting updated object to old object
            }
        }
        catch (err) {
            console.log("Erroo ", err)
        }
    }

    const handleRemove = async (accToDelete) => {
        const id = accToDelete.id;
        const url = `https://react-myshop-project.firebaseio.com/wishList${mobile}/${id}/.json`

        try {
            const response = await Axios.delete(url)
            const myAccount = [...receiveItem.all]

            const index = myAccount.indexOf(accToDelete)

            myAccount.splice(index, 1)

            setItems({ all: myAccount })

            console.log("Response ", response)
        }
        catch (error) {
            console.log("Error ", error)

        }
    }

    return (
        <>
            <div className='container' >
                <div>
                    <h3 className='text-center'>Wish List</h3>
                    {receiveItem.all.map((acc) => {
                        return (
                            <>
                                <div key={acc.id} className='card col-md-4 mt-2 ml-2 float-left'>
                                    <div className='card-body'>
                                        <div className='col-md-4 float-right'>
                                            <img className='card-img-top p-1' width='100%' height='120px' src={acc.proImg} alt='no img' ></img>
                                        </div>
                                        <p className='card-text'><h5>{acc.productName}</h5></p>
                                        <p className='card-text'><h5>{acc.brand}</h5></p>
                                        <p className='card-text'><h5>Rs. {acc.price}</h5></p>

                                        <button className='btn btn-danger' onClick={() => { handleRemove(acc) }}>Remove  <i className="fa fa-trash"></i> </button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div >
        </>
    )
}
