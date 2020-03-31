import React, { useRef } from 'react'

export default function UseRefs() {
    const myRef = useRef(0)
    console.log("My Ref in Function Component ",myRef)

    const focusInput = ()=>{
        console.log("My Input inside focusInput ",myRef)
        myRef.current.focus()
    }


    return (
        <>
            <input ref={myRef} type="text"/>
            <button onClick={focusInput}>Click to Focus</button>
        </>
    )
}
