
import React, { useState } from 'react'
export default function Hooks() {

    const [count, setCount] = useState(0);
    const [show,setShow] = useState(false);
    const [message ,setMessage] = useState('Im a String')

    const handleClick = () => {
        
        // let co = count;
        //   co++
        // setCount(co)
        setShow(!show)
    };

    const changeMessage=()=>{
        setMessage('oh im changed')
    }


    return (
        <div>
            <h1>You Clicked {count} times</h1>
            <button onClick={handleClick}>Click Me!!!</button>
            {show? <p>show is true</p>:null} 
             <button onClick={changeMessage}> Click to change the message</button>
    <h1>{message}</h1>
        </div>
    );
}
