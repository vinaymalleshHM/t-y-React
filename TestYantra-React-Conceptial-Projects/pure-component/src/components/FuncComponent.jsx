import React from 'react'

 function FuncComponent(props) {
    console.log("Functional component is Rendered")
    return (
        <div>
            {props.name}
        </div>
    )
}
export default React.memo(FuncComponent)
