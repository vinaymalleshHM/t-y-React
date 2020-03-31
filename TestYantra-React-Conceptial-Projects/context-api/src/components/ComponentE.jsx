import React from 'react'
import ComponentF from './ComponentF'
import { UserConsumer } from '../context/userContext'

export default function ComponentE() {
    return (
        <div>
            <ComponentF/>
            {/* <UserConsumer>
                {
                    (context)=>{
                    return <h1>Hi {context}</h1>
                    }
                }
            </UserConsumer> */}
        </div>
    )
}
