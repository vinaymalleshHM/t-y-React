import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function MyAccount() {

    const [user, setUser] = useState({})
    const email = localStorage.getItem('user')    
    useEffect(() => {
        getAllAccount()
    }, [])

    const getAllAccount = () => {
        const url = 'https://react-medi.firebaseio.com/createaccounts.json'
        Axios.get(url).then((response => {
            console.log("Response ", response)
            for (const key in response.data) {
                let recipe = response.data[key]
                if (recipe.email === email) {
                    setUser(recipe)
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

                                <img className='card-img-top' width='250px' height='250px' src="http://bit.ly/2G8vpMh" alt="No Image" ></img>
                                <p className='card-text'><h5> <b>Name : </b>{user.fName+user.lName}</h5></p>
                                <p className='card-text'><h5><b>Email Id : </b>{user.email}</h5></p>
                                <p className='card-text'><h5> <b>Mobile No : </b>{user.mobile}</h5></p>
                                <p className='card-text'><h5> <b>Gender : </b>{user.gender}</h5></p>
                                <button className='btn btn-outline-primary offset-3'>Change Password</button>


                            </div>
                        </div>
                    </div>
                {/* )
            })
            } */}
        </div>
            )
        }
