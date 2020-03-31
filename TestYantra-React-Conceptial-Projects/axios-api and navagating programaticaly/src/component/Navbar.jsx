import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import ShowAccount from './ShowAccount';
import HomePage from './HomePage';

export default class Navbar extends Component {

    render() {


        return (<>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <h3 className="card-title">Employee App</h3>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto offset-1">
                            
                            <li className="nav-item">
                                <Link className="nav-link active" to='/createAccount'>Create Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/show'>Show Account</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

            {/* <Route exact path='/' component={Home} /> */}
            <Route path='/show' component={ShowAccount} />
            <Route path='/createAccount' component={CreateAccount} />
            <Route path='/home' component={HomePage} />

            {/* <footer className="card fixed-bottom bg-primary">
                <h2 className="card-header offset-5"> Footer </h2>
                </footer> */}
        </>
        )

    }
}

