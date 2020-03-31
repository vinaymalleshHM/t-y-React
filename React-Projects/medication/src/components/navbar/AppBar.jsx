import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../home/Home';
import SignUp from '../create-account/SignUp';
import ShowProduct from '../showproduct/ShowProduct';
import LoginForm from '../form/LoginForm';
import AddProducts from '../addproduct/AddProducts';
import AddCart from '../addcart/AddCart';
import PlaceOrder from '../placeorder/PlaceOrder';
import MyAccount from '../myaccount/MyAccount';
import Billing from '../billing/Billing';
import Checkout from '../checkout/Checkout';
import UsersTables from '../users-table/UsersTables';
import ProductTable from '../producttable/ProductTable';
import UserContext, { UserConsumer } from '../../context/userContext';
import { withRouter } from 'react-router-dom';
import ProductList from '../producttable/ProductList';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default  function ButtonAppBar(props) {

    const context = useContext(UserContext)
    const [role, setRole] = useState()
    const [login, setlogin] = useState()

    useEffect(() => {
        setRole(window.localStorage.getItem('role'))
        setlogin(window.localStorage.getItem('login'))
    }, [context.login])

    const userV = (context) => {
        context.setLogin(false)
        setRole(null)
        localStorage.clear();
    }

    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar className="bg-primary">
                        <img src="logo.jpg" to="/" alt="" />
                        <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/'>Med 24x7 </Link> &nbsp;&nbsp;
                            <UserConsumer>
                            {
                                (context) => {
                                    // if (context.login) {
                                    if (login === "true") {

                                        if (role === "admin") {
                                            return (
                                                <>
                                                    <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/addproduct' ><i className="fa fa-plus-circle" aria-hidden="true"></i>add products</Link>&nbsp;&nbsp;
                                                                <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/prolist' ><i class="fa fa-eye" aria-hidden="true"></i>products list</Link>&nbsp;&nbsp;
                                                                <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/users'><i className="fa fa-user-circle" aria-hidden="true"></i>users account</Link>&nbsp;&nbsp;
                                                                <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/mycart'><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>&nbsp;&nbsp;
                                                                <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/place'><i class="fa fa-first-order" aria-hidden="true"></i>placed order</Link>&nbsp;&nbsp;
                                                                <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/myaccount'><i className="fa fa-user-circle" aria-hidden="true"></i>myaccount</Link>&nbsp;&nbsp;
                                                                <Link  style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/' onClick={() => userV(context)} className=" ml-auto"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</Link>
                                                </>
                                            )
                                        }
                                        else {

                                            return (
                                                <>
                                                            <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/mycart'><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>&nbsp;&nbsp;
                                                            <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/place'><i class="fa fa-first-order" aria-hidden="true"></i>placed order</Link>&nbsp;&nbsp;
                                                            <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/myaccount'><i className="fa fa-user-circle" aria-hidden="true"></i>myaccount</Link>&nbsp;&nbsp;
                                                            <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/' onClick={() => userV(context)} className="ml-auto"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</Link>
                                                </>
                                            )
                                        }

                                    }
                                    else {
                                        return (
                                            <>
                                                <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/createaccount' className="ml-auto"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</Link>&nbsp;&nbsp;
                                                <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/login'><i className="fa fa-sign-in" aria-hidden="true"></i>Login</Link>
                                            </>
                                        )
                                    }
                                }
                            }
                        </UserConsumer>
                        {/* </div> */}
                    </Toolbar>
                </AppBar>
            </div>
            <Route exact path='/' component={Home} />

            <Route exact path='/createaccount' component={SignUp} />
            <Route exact path='/showproduct' component={ShowProduct} />
            {login ? null : <Route exact path='/login' component={LoginForm} />}

            {login ? <><Route path='/addproduct' component={AddProducts} />
                <Route exact path='/mycart' component={AddCart} />
                <Route exact path='/place' component={PlaceOrder} />
                <Route exact path='/myaccount' component={MyAccount} />
                <Route exact path='/bill' component={Billing} />
                <Route exact path='/check' component={Checkout} />
                <Route exact path='/users' component={UsersTables} />
                <Route exact path='/prolist' component={ProductList} />
            </> : null
            }

        </Router>
    );
}
withRouter(ButtonAppBar);