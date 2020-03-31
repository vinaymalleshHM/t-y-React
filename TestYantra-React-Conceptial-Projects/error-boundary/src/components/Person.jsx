import React from 'react'

export default function Person(props) {

if(props.userName==='Dimple'){

    return (
        <div>
            <h1>Name {props.userName}</h1>
            {/* <h1>Name {this.props.userName}</h1> */}
        </div>
    )
}else{
    throw new Error('user Authentication error')
}


}
