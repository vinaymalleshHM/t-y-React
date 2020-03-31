import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function ShowAccount() {
    const[data , setData] =useState([])
    const[load , setLoad] =useState(false)
    const[error , setError] =useState('')
    useEffect(()=>{
        getAccount()
    },[])

    const getAccount = async ()=>{
        const url= 'https://jsonplaceholder.typicode.com/todos'
        try{
            const respone = await Axios.get(url)
            setData(respone.data);
            setLoad(true)
            console.log('data ',data)
        }catch(err){
            setLoad(true)
            console.log("Error ",err)
            setError(err.message)
        }
    }

if(load){
    if (!error) {
        
        return (
            <>
                <ul>
                    {data.map((account)=>{
                        return <li key={account.id}>{account.title}</li>
                    })}
                </ul>
            </>
        )
    }else{
        return <h1>{error}</h1>
    }

}
else{
    return(<h1>Loading...</h1>)
}
}
