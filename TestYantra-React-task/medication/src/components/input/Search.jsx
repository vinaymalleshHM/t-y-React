import React from 'react'

export default function Search(props) {
  
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <form className="form-inline col-md-12">
                    <input className="form-control col-md-9 offset-1" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>props.handleChange(e.target.value)} />

                </form>
            </nav>
        </>
    )
}
