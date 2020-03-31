import React from 'react'
import { UserConsumer } from '../context/userContext'

export default function ComponentF() {
    return (
        <div>
            <UserConsumer>
                {
                    // (context)=>{
                    //     return <h1>Hello {context} </h1>
                    // }

                    (userData)=>{
                        console.log('User Data',userData)
                    return(
                        <div>
                    <h1>Hello {userData.username}</h1>
                    <button onClick={()=>userData.setUserName('Kiran')}> Click to alert!!</button>
                    </div>
                    )       
                    }
                }
            </UserConsumer>
            
        </div>
    )
}
