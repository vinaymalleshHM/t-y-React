import React from 'react'

export default function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <h1 className="navbar-brand" >Employee App</h1>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <h3 className="nav-link">Login</h3>
      </li>
      <li className="nav-item">
        <h3 className="nav-link">Accounts</h3>
      </li>
    </ul>
    
  </div>
</nav>          )
        }
