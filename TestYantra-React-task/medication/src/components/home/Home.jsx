import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Search from '../input/Search'

export default function Home(props) {
  const [receiveItem, setItems] = useState({ all: [] })
  const [show, setShow] = useState(false)
  const mobile = localStorage.getItem('mobile')

  useEffect(() => {
    getAllAccounts()
  }, [])

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
        setItems({ all: fetchedAccount })
      }
    }
    catch (err) {
      console.log("Erorr ", err)
    }
  }

  const addCart = async (acc) => {
    const valid = window.localStorage.getItem('login')

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
    else {

      props.history.push("/login")
    }

  }
 const handleChange = (e)=>{

 }

  return (
    <>
      <Search data={handleChange}/>
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
          <div className='container-fluid mt-4'>
            <div className='col-md-3 col-sm-6 col-12 mt-2 card float-left'>
              <div key={acc.id} className='card-body'>
                <img className='card-img-top' width='100%' height='250px' src={acc.proImg} alt='No Image' ></img>
                <p className='card-text'><h5>{acc.productName}</h5></p>
                <p className='card-text'><h5>{acc.brand}</h5></p>
                <p className='card-text'><h5>Rs. {acc.price}</h5></p>
                <button className='btn btn-outline-primary ml-3' onClick={() => addCart(acc)} >Buy Now</button>
                <button className='btn btn-outline-success ml-2' onClick={() => addCart(acc)}>Add to Cart</button>

              </div>
            </div>
          </div>
        )
      })
      }
    </>
  )
}
