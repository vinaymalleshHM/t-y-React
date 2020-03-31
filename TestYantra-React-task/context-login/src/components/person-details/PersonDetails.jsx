import React from 'react'
import { UserConsumer } from '../../context/userAuthentication'

export default function PersonDetails() {
    return (
        <div>
            <UserConsumer>
     {
      (context) =>{

        return  (<div>
      <h1>{context.userName} logged in</h1>
            </div>)
    }

      }  
     </UserConsumer>
        </div>
    )
}
