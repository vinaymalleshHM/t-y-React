import React from 'react'
import { UserConsumer } from '../../context/userAuthentication'
import PersonDetails from '../person-details/PersonDetails'

export default function PersonList() {
    return (
        <div>
            <h1>Person list page</h1>
<UserConsumer>
        {(context)=>{
                       return(<div>
                            {context.login? <PersonDetails/>:<div><h1>{context.userName} logged out</h1></div>}
                            </div>)                        
                          }}
    
</UserConsumer>
        </div>
    )
}
