import React, { useContext, useState, useEffect } from 'react'
import Form from '../form/Form'
import Logout from '../logout/Logout';
import UserContext, { UserConsumer } from '../../context/userContext';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import CreateAccount from '../create-account/CreateAccount';
import AddProduct from '../addproduct/AddProduct';
import ShowProduct from '../showproduct/ShowProduct';
import AddCart from '../addcart/AddCart';
import WishList from '../whishlist/WishList';
import MyAccount from '../myaccount/MyAccount';
import Billing from '../billing/Billing';
import ThankYou from '../thankyou/ThankYou';
import PlaceOrder from '../placeorder/PlaceOrder';


export default function Navbar() {

    const context = useContext(UserContext)
    const [role,setRole] = useState()
    const [login,setlogin] = useState()

    useEffect(() => {
        setRole(window.localStorage.getItem('role'))
        setlogin(window.localStorage.getItem('isLogin'))
    }, [context.login])
   
    const userV = (context) => {
        context.setLogin(false)
        setRole(null)
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

                        <UserConsumer>
                            {
                                (context) => {
                                    // if (context.login) {
                                    if (login ==='true') {

                                        if (role === "admin") {
                                            return (
                                                <>
                                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/addproduct' ><i class="fa fa-plus-circle" aria-hidden="true"></i>add products</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/products'><i class="fa fa-eye" aria-hidden="true"></i>products</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/mywhishlist'><i class="fa fa-heart" aria-hidden="true"></i>mywhishlist</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/mycart'><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/place'><i class="fa fa-user-circle" aria-hidden="true"></i>place order</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/myaccount'><i class="fa fa-user-circle" aria-hidden="true"></i>myaccont</Link>

                                                        </li>
                                                    </ul>
                                                    <ul className="navbar-nav ">
                                                        <Link className="navbar-brand" onClick={() => userV(context)}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</Link>
                                                    </ul></>
                                            )
                                        }
                                        else {

                                            return (<>
                                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                                    <li className="nav-item active">
                                                        <Link className="navbar-brand" to='/products'><i class="fa fa-eye" aria-hidden="true"></i>products</Link>

                                                    </li>
                                                    <li className="nav-item active">
                                                        <Link className="nav-link" to='/mywhishlist'><i class="fa fa-heart" aria-hidden="true"></i>mywhishlist</Link>

                                                    </li>
                                                    <li className="nav-item active">
                                                        <Link className="nav-link" to='/mycart'><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>

                                                    </li>
                                                    <li className="nav-item active">
                                                        <Link className="navbar-brand" to='/place'><i class="fa fa-user-circle" aria-hidden="true"></i>place order</Link>

                                                    </li>
                                                    <li className="nav-item active">
                                                        <Link className="navbar-brand" to='/myaccount'><i class="fa fa-user-circle" aria-hidden="true"></i>myaccont</Link>

                                                    </li>
                                                </ul>
                                                <ul className="navbar-nav ">
                                                    <Link className="navbar-brand" onClick={() => userV(context)}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</Link>

                                                </ul>
                                            </>)
                                        }

                                    }
                                    else {
                                        return (
                                            <>
                                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                                </ul>
                                                <ul className="navbar-nav ">

                                                    <li className="nav-item active ">
                                                        <Link className="nav-link" to='/createaccount'><i class="fa fa-user-plus" aria-hidden="true"></i>Register</Link>
                                                    </li>

                                                    <li className="nav-item active ">
                                                        <Link className="nav-link " to='/login'><i class="fa fa-sign-in" aria-hidden="true"></i>Login</Link>
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

            <Route exact path='/' component={Logout} />

            <Route path='/createaccount' component={CreateAccount} />
            {/* <Route path='/usernavabar' component={UserNavabar} /> */}
            {context.login ? null : <Route path='/login' component={Form} />}
            {/* <Route path='/login' component={Form} /> */}

            {login ? <><Route path='/addproduct' component={AddProduct} />
                <Route path='/mycart' component={AddCart} />
                <Route path='/place' component={PlaceOrder} />
                <Route path='/mywhishlist' component={WishList} />
                <Route path='/products' component={ShowProduct} />
                <Route path='/myaccount' component={MyAccount} />
                <Route path='/bill' component={Billing} />
                <Route path='/thankyou' component={ThankYou} />

            </> : null
            }

        </Router >

    )
}

