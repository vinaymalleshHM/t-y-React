import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import CreateAccount from './components/createaccount/CreateAccount';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function Navbar() {

return  (<Router>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to='/' >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/createAccount'>Create Account</Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>

    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/createAccount' component={CreateAccount} />

    <footer className="card fixed-bottom bg-primary">
      <h2 className="card-header offset-5">
        Footer
  </h2>

    </footer>
  </Router>)
}
export default Navbar
