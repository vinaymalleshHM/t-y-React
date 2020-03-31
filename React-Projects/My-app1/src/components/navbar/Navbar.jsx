import React, { useContext, useState } from 'react'
import Form from '../form/Form'
import Logout from '../logout/Logout';
import UserContext, { UserConsumer } from '../../context/userContext';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import CreateAccount from '../create-account/CreateAccount';
import UserNavabar from './UserNavabar';
import AddProduct from '../addproduct/AddProduct';
import ShowProduct from '../showproduct/ShowProduct';
import AddCart from '../addcart/AddCart';
import WishList from '../whishlist/WishList';
import MyAccount from '../myaccount/MyAccount';
import Billing from '../billing/Billing';


export default function Navbar() {

    const context = useContext(UserContext)
    const role = localStorage.getItem('role')
    const userV = (context) => {
        // console.log("++++",context)
        context.setLogin(false)
        localStorage.clear();
    }


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
                                       
                                        if (role ==="admin") {
                                            return (
                                                <>
                                                    <ul className="navbar-nav ">
                                                        <Link className="navbar-brand" to='/addproduct' ><i class="fa fa-upload" aria-hidden="true"></i>add products</Link>
                                                        <Link className="navbar-brand" ><i class="fa fa-eye" aria-hidden="true"></i>products</Link>
                                                        <Link className="navbar-brand" ><i class="fa fa-heart" aria-hidden="true"></i>mywhishlist</Link>
                                                        <Link className="navbar-brand" ><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>
                                                        <Link className="navbar-brand" to='/myaccount'>MyAccont</Link>
                                                        <Link className="navbar-brand" onClick={() => userV(context)}>Logout</Link>
                                                    </ul></>
                                            )
                                        }
                                        else {
                                           
                                            return (<>
                                                <ul className="navbar-nav ">
                                                    <Link className="navbar-brand" to='/products' ><i class="fa fa-eye" aria-hidden="true"></i>products</Link>
                                                    <Link className="navbar-brand" to='/mywhishlist'><i class="fa fa-heart" aria-hidden="true"></i>mywhishlist</Link>
                                                    <Link className="navbar-brand" to='/mycart' ><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>
                                                    <Link className="navbar-brand" to='/myaccount'>MyAccont</Link>
                                                    <Link className="navbar-brand" onClick={() => userV(context)}>Logout</Link>
                                                   ``   
                                                </ul></>)
                                        }

                                    }
                                    else {
                                        return (
                                            <>
                                                <ul className="navbar-nav ">

                                                    <li className="nav-item active ">
                                                        <Link className="nav-link" to='/createaccount'>Register</Link>
                                                    </li>

                                                    <li className="nav-item active ">
                                                        <Link className="nav-link " to='/login'>Login</Link>
                                                    </li>

                                                </ul></>
                                        )
                                    }
                                }
                            }
                        </UserConsumer>

                    </div>
                </nav >
            </>

            {/* <Route exact path='/' component={Home} /> */}

            <Route path='/createaccount' component={CreateAccount} />
            {/* <Route path='/usernavabar' component={UserNavabar} /> */}
            {context.login ? null : <Route path='/login' component={Form} />}

            {context.login ? <><Route path='/addproduct' component={AddProduct} />
                <Route path='/mycart' component={AddCart} />
                <Route path='/mywhishlist' component={WishList} />
                <Route path='/products' component={ShowProduct} />
                <Route path='/myaccount' component={MyAccount} />
                <Route path='/bill' component={Billing} />

            </> : null
            }

        </Router >

    )
}

