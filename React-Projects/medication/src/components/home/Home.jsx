import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Search from '../input/Search'
import PrimarySearchAppBar from '../input/Searching'
import   './homeStyle.css'

export default function Home(props) {
  const [receiveItem, setItems] = useState({ all: [] })
  const [newData, setNewData] = useState({ allNew: [] })
  const mobile = localStorage.getItem('mobile')
  const valid = window.localStorage.getItem('login')

  useEffect(() => {
    getAllAccounts()
  }, [])

  const getAllAccounts = async () => {
    const url = 'https://react-medi.firebaseio.com/addproducts.json'
    try {
      const response = await Axios.get(url)

      let fetchedAccount = []
      for (let key in response.data) {
        let account = response.data[key]
        fetchedAccount.push({
          ...account,
          id: key,
          totalPrice:account.price
        })
        setItems({ all: fetchedAccount })
        setNewData({ allNew: fetchedAccount })
      }
    }
    catch (err) {
      console.log("Erorr ", err)
    }
  }

  const buyNow = (acc) => {
    let arr=[]
    arr.push(acc)
    if(valid){
      window.localStorage.setItem('buy',JSON.stringify(arr));
      props.history.push("/check")
    }
    else{
      props.history.push("/login")
    }
  }
  const addCart = async (acc) => {
    if (valid) {
      let accData = receiveItem.all
      accData.map((val) => {
        if (val.id === acc.id) {
          return acc.visible = true
        }
        return val
      })
      setItems({ all: accData })
      const cartItem = acc
      const url = `https://react-medi.firebaseio.com/addtoCart${mobile}.json`
      try {

        const response = await Axios.post(url, cartItem)
        if (response.status === 200) {
          console.log('OK')
        }
        else {
          console.log("err")
        }
      }
      catch (err) {
        console.log('Err', err)
      }
    }
    else {

      props.history.push("/login")
    }

  }
  const handleChange = (e) => {
    console.log("ghgjh", e)
    const getData = newData.allNew
    console.log("objct", getData)
    const data = getData.filter(val => val.pName.toLowerCase().startsWith(e))
    let arr = [];
    for (const key in data) {
      arr.push({
        ...data[key],
      })
    }
    if (arr) {
      setItems({ all: arr })

    }
  }

  return (
    <>
      {/* <Search data={handleChange} /> */}
      <PrimarySearchAppBar data={handleChange} />
      <div className="container-fluid">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

          <div id="carouselExampleIndicators" height="80%" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner mt-5" >
              <div className="carousel-item active" >
                <img height="300px" width="100%" src="https://images.unsplash.com/photo-1562243061-204550d8a2c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img height="300px" width="100%" src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="carousel-item">
                <img height="300px" width="100%" src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      {receiveItem.all.map((acc) => {
        return (
          <div className='mycard container-fluid mt-4'>
            <div className='col-md-3 col-sm-6 col-12 mt-2 card float-left'>
              <div key={acc.id} className='card-body'>
                <img className='card-img-top' width='100%' height='250px' src={acc.proImg} alt='No Image' ></img>
                <p className='card-text'><h5>{acc.pName}</h5></p>
                <p className='card-text'><h5>{acc.company}</h5></p>
                <p className='card-text'><h5>Rs. {acc.price}</h5></p>
                <button className='btn btn-outline-primary ml-3' onClick={() => buyNow(acc)} >Buy Now</button>
                {acc.visible ? <button className='btn btn-outline-success ml-2' disabled>Add to Cart</button> : <button className='btn btn-outline-success ml-2' onClick={() => { addCart(acc) }}>Add to Cart</button>}
              </div>
            </div>
          </div>
        )
      })
      }
    </>
  )
}
