import React, { Component, useState, useContext } from 'react'
import Form from '../form/Form'
import UserContext, { UserConsumer } from '../../context/userContext'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Logout from '../logout/Logout';
import Home from '../home/Home';
import CreateAccount from '../createaccount/CreateAccount';
import ShowToDoList from '../show-todo/ShowToDoList';
import AddToDoList from '../add-todo/AddToDoList';


function Navbar() {
    const context = useContext(UserContext)

    return (
        <Router>
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link className="navbar-brand" to='/'>Recipe Application</Link>

                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/' >Home</Link>
                            </li>
                        </ul>
                        <UserConsumer>
                            {
                                (context) => {

                                    if (context.login){
                                        return (
                                            <ul className="navbar-nav ">
                                                <li className="nav-item active ">
                                                    <Link className="nav-link" to='/addtodo'>AddToDo List</Link>
                                                </li>
                                                <li className="nav-item active ">
                                                    <Link className="nav-link " to='/showtodo'>ShowToDo</Link>
                                                </li>
                                            </ul>
                                        )
                                    }
                                }
                            }
                        </UserConsumer>
                        <UserConsumer>
                            {
                                (context) => {
                                    if (context.login) {
                                        return (
                                            <ul className="navbar-nav ">
                                                <li className="nav-item active "></li>
                                                <Link className="nav-link active" to='/login' onClick={() => context.setLogin(false)}>Logout</Link>
                                            </ul>)
                                    }
                                    else {
                                        return (
                                            <ul className="navbar-nav ">
                                                <li className="nav-item active ">
                                                    <Link className="nav-link" to='/createaccount'>Create Account</Link>
                                                </li>
                                                <li className="nav-item active ">
                                                    <Link className="nav-link " to='/login'>Login</Link>
                                                </li>
                                            </ul>
                                        )
                                    }
                                }
                            }
                        </UserConsumer>

                    </div>
                </nav >
            </>

            <Route exact path='/' component={Home} />
            
            <Route path='/createaccount' component={CreateAccount} />
            <Route path='/addtodo' component={AddToDoList} />
            <Route path='/showtodo' component={ShowToDoList} />
            {context.login?null:<Route path='/login' component={Form} />}

        </Router >
    )
}

export default Navbar