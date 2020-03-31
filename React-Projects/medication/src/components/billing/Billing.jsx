import React from 'react'

export default function Billing(props) {
    console.log(props)
    return (
        <>
            <div>
                <h3 className='text-center'>Billing</h3>
                <div className='card-body'>
                    <p className='card-text'><h5>items  :{props.data.length}  </h5></p>
                    <p className='card-text'><h5>Delivery Fee :  Free</h5></p>
                    <p className='card-text'><h5>Payable Amount :{props.data.state} </h5></p>
                    <button className='btn btn-outline-success ml-2'>Pay Amount</button>
                </div>
            </div>
        </>
    )
}
