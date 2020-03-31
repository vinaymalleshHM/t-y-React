import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AddProducts from '../addproduct/AddProducts';
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

   

    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar className="bg-primary">
                        <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/addproduct'>Add Product  </Link> &nbsp;&nbsp;
                        <Link style={{ color: "white", textDecoration: "none", fontSize: "15px" }} to='/prolist'>product </Link> &nbsp;&nbsp;
                           
                    </Toolbar>
                </AppBar>
            </div>

            <Route path='/addproduct' component={AddProducts} />
                
                <Route exact path='/prolist' component={ProductList} />

        </Router>
    );
}
withRouter(ButtonAppBar);