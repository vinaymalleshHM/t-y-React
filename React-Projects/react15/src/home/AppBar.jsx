import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddProduct from './AddProduct';

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

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <div>
                                <img src="logo.jpg" to="/" alt=""/>
                                <Link style={{color:"white",textDecoration:"none",fontSize:"15px"}} to='/'>Med 24x7 </Link> &nbsp;&nbsp;
                                <Link style={{color:"white",textDecoration:"none",fontSize:"15px"}} to='/addproduct' ><i className="fa fa-plus-circle" aria-hidden="true"></i>add products</Link>&nbsp;&nbsp;
                                <Link style={{color:"white",textDecoration:"none",fontSize:"15px"}} to='/prolist' ><i class="fa fa-eye" aria-hidden="true"></i>products list</Link>&nbsp;&nbsp;
                                <Link style={{color:"white",textDecoration:"none",fontSize:"15px"}} to='/users'><i className="fa fa-user-circle" aria-hidden="true"></i>users account</Link>&nbsp;&nbsp;
                                <Link style={{color:"white",textDecoration:"none",fontSize:"15px"}} to='/mycart'><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>mycart</Link>&nbsp;&nbsp;
                                <Link style={{color:"white",textDecoration:"none",fontSize:"15px"}} to='/place'><i class="fa fa-first-order" aria-hidden="true"></i>placed order</Link>&nbsp;&nbsp;
                                <Link style={{color:"white",textDecoration:"none",fontSize:"15px"}} to='/myaccount'><i className="fa fa-user-circle" aria-hidden="true"></i>myaccount</Link>&nbsp;&nbsp;
                            </div>
                        </Typography>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Route path='/addproduct' component={AddProduct} />
            
        </Router>
    );
}