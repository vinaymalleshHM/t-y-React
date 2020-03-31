import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function MyAccount() {

    const [user, setUser] = useState({})
    const email = localStorage.getItem('user')
    useEffect(() => {
        getAllAccount()
    }, [])

    const getAllAccount = () => {
        // event.preventDefault()
        const url = 'https://react-myshop-project.firebaseio.com/createaccounts.json'
        Axios.get(url).then((response => {
            // console.log("Response ", response)
            const fetchedRecipies = []
            for (const key in response.data) {
                let recipe = response.data[key]

                if (recipe.emailid === email) {
                    setUser(recipe)
                    console.log('MY acc',user)
                }

            }

        })).catch((err) => {
            console.log('Error ', err)
        })
    }
    return (
        <div>
            {/* {user.all.map((acc) => {
                return ( */}
                    <div className='container-fluid offset-4 mt-4'>
                        <div className='col-md-4 col-sm-6 col-12 mt-2 card float-left'>
                            <div key={user.id} className='card-body'>

                                {/* <img className='card-img-top' width='100%' height='250px' src={acc.proImg} alt='No Image' ></img> */}
                                <p className='card-text'><h5> <b>Name : </b>{user.username}</h5></p>
                                <p className='card-text'><h5><b>Email Id : </b>{user.emailid}</h5></p>
                                <p className='card-text'><h5> <b>Mobile No : </b>{user.mobileno}</h5></p>
                                <p className='card-text'><h5> <b>Gender : </b>{user.gender}</h5></p>
                                <button className='btn btn-outline-primary ml-3'>Change Password</button>


                            </div>
                        </div>
                    </div>
                {/* )
            })
            } */}
        </div>
            )
        }
