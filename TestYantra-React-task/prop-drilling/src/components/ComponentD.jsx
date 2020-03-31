import React from 'react'
import ComponentE from './ComponentE'

export default function ComponentD(props) {
    return (
        <div>
            <ComponentE pName={props.uname}/>
        </div>
    )
}

