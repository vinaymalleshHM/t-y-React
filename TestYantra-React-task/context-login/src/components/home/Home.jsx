import React,{useContext} from 'react'
import UserAuthenticContext from '../../context/userAuthentication'

export default function Home() {
    const context = useContext(UserAuthenticContext)
    console.log('Use Context Functional Component ',context)
    return (
        <div>
            {context.login? <h1>Home Page</h1>:<h1>Login to see the Home page</h1>}
            
        </div>
    )
}
