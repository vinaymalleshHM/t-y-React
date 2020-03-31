import React, { useState, useEffect } from 'react'
import Axios from 'axios'



export default function ShowProduct() {

    const [receiveItem, setItems] = useState({all:[]})
    
    const [account, setAccont] = useState({ allData: [] })
   
    const [show, setShow] = useState(false)
    const mobile = localStorage.getItem('mobile')


    useEffect(() => {
        getAllAccounts()
    }, [])


    const getAllAccounts = async () => {
        // const url = 'https://react-myshop-project.firebaseio.com/addproduct.json'
        const url = 'http://localhost:8080/shopingapp/getproduct'

        try {
            const response = await Axios.get(url)

            let fetchedAccount = []
            for (let key in response.data) {
                let account = response.data[key]

                fetchedAccount.push({
                    ...account,
                    id: key,
                    color:false
                })
                setItems({all:fetchedAccount})
                console.log("ghghghh",receiveItem.all)
            }
        }
        catch (err) {
            console.log("Erorr ", err)
        }
    }

    const searchProduct = (event) => {
        const data = receiveItem.all.filter(val => val.productName.toLowerCase().includes(event))

        let arr = [];
        for (const key in data) {
            arr.push({
                ...data[key],
                // color: false,
                // visible:false,
            })
        }
        if (arr) {
            setAccont({ allData: arr })
            // setItems(arr)
        } else {
            setAccont({ allData: [] })
        }
       
    }

  




    const handleColor = async(acc) => {
      console.log(acc.id)
      

        
        const wishList = acc

        if (!acc.color) {
                  const url = `https://react-myshop-project.firebaseio.com/wishList${mobile}.json`
                  Axios.post(url, wishList).then((response) => {
                      console.log("Success ", response)
                      if (response.status === 200) {
                          console.log('Added')
                      }
                  }).catch((err) => {
                      console.log("Error ", err)
                  })
                //   let accData = account.allData
                //   accData.map((val) => {
                //       if (val.id === acc.id) {
          
                //           return acc.color = !acc.color
                //       }
                //       return val
                //   })
                //   setAccont({ allData: accData })
                let accData = receiveItem.all
                  accData.map((val) => {
                      if (val.id === acc.id) {
          
                          return acc.color = !acc.color
                      }
                      return val
                  })

                setItems({all:accData})
            }
       
        else {

            // let accData = account.allData
            //       accData.map((val) => {
            //           if (val.id === acc.id) {
          
            //               return acc.color = !acc.color
            //           }
            //           return val
            //       })
            //       setAccont({ allData: accData })

            let accData = receiveItem.all
            accData.map((val) => {
                if (val.id === acc.id) {
    
                    return acc.color = !acc.color
                }
                return val
            })


          setItems({all:accData})

           
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
        const url = `https://react-myshop-project.firebaseio.com/addtoCart${mobile}.json`
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
                                <div className='offset-11'>
                                    {acc.color ? <i style={{ color: 'red' }} onClick={() => { handleColor(acc) }} className="fa fa-heart"></i> :
                                        <i onClick={() => { handleColor(acc) }} className="fa fa-heart-o"></i>}
                                </div>
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

