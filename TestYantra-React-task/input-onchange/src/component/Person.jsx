import React, { useState } from 'react'

export default function Person(props) {

    const [name1, setName1] = React.useState("");
    const [click, setClick] = React.useState(false);



    //    const handlechange = (e)=>{
    // console.log(e)
    //    }


    return (
        <>
            <div>  {
                props.data.map((val, index) => {
                    //console.log(val);
                    // const { id, name, age } = val
                   // console.log(val.id)
                    return (
                        <div key={val.id} className='card col-md-4 mt-4 offset-4'>
                            <div className="card-body">
                                <p>Person Name:{val.name}</p>
                                <p>age:{val.age}</p>
                    
                                <input type="text" value={val.name} onChange ={e => props.action(e.target.value,val.id)} 
                                 />
                                <button className="btn btn-primary offset-1" onClick={()=>props.delete(val.id)} >Delete</button>
                            </div>
                        </div>
                    )



                })

            }
            </div> </>
    )
}
