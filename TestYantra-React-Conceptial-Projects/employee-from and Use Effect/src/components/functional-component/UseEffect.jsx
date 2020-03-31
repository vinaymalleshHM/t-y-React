import React, { useState, useEffect } from 'react'

export default function UseEffect() {

    const [firstName,setFirstName] = useState('First Name')
    const [show,setShow] = useState(false)

        // useEffect(()=>{
        //     console.log("use Effect Executed")
        // })


        //Execute only when component is mounted
        //this is equavalent to compomemtDidMount of class component
        useEffect(()=>{
            console.log("use Effect Executed")
        },[])


        useEffect(()=>{
            console.log("use Effect Executed firstName state update")
        },[firstName])

        useEffect(()=>{
            console.log("use Effect Executed show State update")
        },[show])


        useEffect(()=>{
                console.log("use Effect Executed")
                return()=>{
                    console.log("UnMounting")
                }
            },[])
    


       const changeName=()=>{
            setFirstName('Chandan')
        }

       const changeShow=()=>{
            setShow(true)
        }

    return (
        <>
            <h1>{firstName}</h1>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeShow}>Change Show</button>
        </>
    )
}
