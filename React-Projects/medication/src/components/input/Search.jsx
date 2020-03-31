import React from 'react'

export default function Search(props) {

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-primary bg-primary">
                <div className="input-group-prepend">
                    <div className="input-group-text" size="40px"><i className="fa fa-search p-1" aria-hidden="true"></i></div>
                </div>
                <input type="search" className="form-control" onChange={(e) => props.data(e.target.value)} placeholder="Search..."/>
            </nav>
        </>
            )
        }
