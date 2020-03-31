import React from 'react'
import Form from '../form/Form'
import Logout from '../logout/Logout';
import UserContext, { UserConsumer } from '../../context/userContext';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import CreateAccount from '../create-account/CreateAccount';

export default function UserNavabar() {
    return (
        <Router>
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to='/'>My Shopping</Link>

                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            {/* <Link className="nav-link" to='/' >Home</Link> */}
                        </li>
                    </ul>
                    <UserConsumer>
                        {
                            (context) => {
                                if (context.login) {
                                    return (
                                        <ul className="navbar-nav ">
                                            <Link className="nav-link active" to='' >Show Products</Link>
                                            <Link className="nav-link active" to='' >Whish List</Link>
                                            <Link className="nav-link active" to='' >Cart Item</Link>
                                            <Link className="nav-link active" to='' onClick={() => context.setLogin(false)}>Logout</Link>
                                            
                                        </ul>)
                                }
                                else {
                                    return (
                                        <ul className="navbar-nav ">
                                            
                                        </ul>
                                    )
                                }
                            }
                        }
                    </UserConsumer>

                </div>
            </nav >
        </>

        {/* <Route exact path='/' component={Home} /> */}
        
        {/* <Route path='/createaccount' component={CreateAccount} /> */}
        {/* <Route path='/addrecipe' component={AddRecipe} /> */}
        {/* <Route path='/showacc' component={ShowAccount} /> */}
        {/* {context.login?null:<Route path='/login' component={Form} />} */}

    </Router >
    )
}
