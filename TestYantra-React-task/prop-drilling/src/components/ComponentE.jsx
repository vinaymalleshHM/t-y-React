import React from 'react'
import ComponentF from './ComponentF'

export default function ComponentE(props) {
    return (
        <div>
            <ComponentF sendData={props.pName}/>
        </div>
    )
}
