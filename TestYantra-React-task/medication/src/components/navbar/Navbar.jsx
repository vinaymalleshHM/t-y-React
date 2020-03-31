import React, { useContext, useState, useEffect } from 'react'
import Form from '../form/Form'
import UserContext, { UserConsumer } from '../../context/userContext';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import CreateAccount from '../create-account/CreateAccount';
import AddProduct from '../addproduct/AddProduct';
import ShowProduct from '../showproduct/ShowProduct';
import AddCart from '../addcart/AddCart';
import MyAccount from '../myaccount/MyAccount';
import Billing from '../billing/Billing';
import PlaceOrder from '../placeorder/PlaceOrder';
import Home from '../home/Home';
import Checkout from '../checkout/Checkout';
import ShowAccount from '../showaccount/ShowAccount';



export default function Navbar() {

    const context = useContext(UserContext)
    const [role, setRole] = useState()
    const [login, setlogin] = useState()
    const [search, setSearch] = useState(true)

    useEffect(() => {
        setRole(window.localStorage.getItem('role'))
        setlogin(window.localStorage.getItem('login'))
    }, [context.login])
    useEffect(() => {
       show()
    }, [])
    useEffect(() => {
       show()
    }, [search])

    const userV = (context) => {
        context.setLogin(false)
        setRole(null)
        localStorage.clear();
    }
const handleChange=(e)=>{
      context.setInput(e.target.value)
}
const show = ()=>{
    if(window.location.href === window.location.href.endsWith("/") || window.location.href === window.location.href.endsWith("/showproduct")){
        // return setSearch (true)
         setSearch (true)
    }
    else{
        // return setSearch (false)
         setSearch (false)
    }
}

    return (
        <Router>
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <img src="logo.jpg" alt="" to="/" />
                    <Link className="navbar-brand" to='/'>Medication</Link>

                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavId">

                        <UserConsumer>
                            {
                                (context) => {
                                    // if (context.login) {
                                        if (login ==="true") {

                                        if (role === "admin") {
                                            return (
                                                <>
                                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/addproduct' ><i className="fa fa-plus-circle" aria-hidden="true"></i>add products</Link>

                                                        </li>
                                                        {/* <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/showproduct' ><i class="fa fa-eye" aria-hidden="true"></i>products</Link>

                                                        </li> */}
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/users'>user accounts</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/mycart'><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/place'><i class="fa fa-first-order" aria-hidden="true"></i>placed order</Link>

                                                        </li>
                                                        <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/myaccount'><i className="fa fa-user-circle" aria-hidden="true"></i>myaccount</Link>

                                                        </li>
                                                    </ul>
                                                    <ul className="navbar-nav ">
                                                        <Link className="navbar-brand" onClick={() => userV(context)}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</Link>
                                                    </ul></>
                                            )
                                        }
                                        else {

                                            return (<>
                                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                                    {/* <li className="nav-item active">
                                                            <Link className="navbar-brand" to='/showproduct' ><i class="fa fa-eye" aria-hidden="true"></i>products</Link>

                                                        </li> */}
                                                    <li className="nav-item active">
                                                        <Link className="nav-link" to='/users'>users account</Link>

                                                    </li>
                                                    <li className="nav-item active">
                                                        <Link className="nav-link" to='/mycart'><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>

                                                    </li>
                                                    <li className="nav-item active">
                                                        <Link className="navbar-brand" to='/place'><i class="fa fa-first-order" aria-hidden="true"></i>place order</Link>

                                                    </li>
                                                    <li className="nav-item active">
                                                        <Link className="navbar-brand" to='/myaccount'><i className="fa fa-user-circle" aria-hidden="true"></i>myaccount</Link>

                                                    </li>
                                                </ul>
                                                <ul className="navbar-nav ">
                                                    <Link className="navbar-brand" onClick={() => userV(context)}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</Link>

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
                                                        <Link className="nav-link" to='/createaccount'><i className="fa fa-user-plus" aria-hidden="true"></i>Register</Link>
                                                    </li>

                                                    <li className="nav-item active ">
                                                        <Link className="nav-link " to='/login'><i className="fa fa-sign-in" aria-hidden="true"></i>Login</Link>
                                                    </li>

                                                </ul></>
                                        )
                                    }
                                }
                            }
                        </UserConsumer>

                    </div>
                </nav >
               
                {/* {search?<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <form className="form-inline col-md-12">
                        <input className="form-control col-md-9 offset-1" type="search" placeholder="Search" aria-label="Search"  onChange={handleChange} />
                        <button className="btn btn-outline-success col-md-1" type="submit">Search</button>

                    </form>
                </nav>:null} */}
            </>

            {/* <Route exact path='/' component={Logout} /> */}
            <Route exact path='/' component={Home} />

            <Route path='/createaccount' component={CreateAccount} />
            <Route exact path='/showproduct' component={ShowProduct} />
            {login ? null : <Route path='/login' component={Form} />}
        
            {login ? <><Route path='/addproduct' component={AddProduct} />
                <Route path='/mycart' component={AddCart} />
                <Route path='/place' component={PlaceOrder} />
                <Route path='/myaccount' component={MyAccount} />
                <Route path='/bill' component={Billing} />
                <Route path='/check' component={Checkout} />
                <Route path='/users' component={ShowAccount} />
            </> : null
            }

        </Router >

    )
}

