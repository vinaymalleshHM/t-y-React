import React,{useState} from 'react'
import { UserConsumer } from '../../context/userAuthentication'
import PersonDetails from '../person-details/PersonDetails'

export default function Logout( props) {

    return (
        <div>
            <UserConsumer>
                {
                    (context)=>{
                 return(<div>
               
{context.login?  <button onClick={()=>{context.setLogout(false)}}>logout</button>
                :<button onClick={()=>{context.setLogout(true)}}>login</button>
                 } </div>)
                    }
                }
            </UserConsumer>
        </div>
    )
}
