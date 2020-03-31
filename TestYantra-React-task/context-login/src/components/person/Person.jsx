import React, { Component } from 'react'
import UserAuthenticContext from '../../context/userAuthentication'

export default class Person extends Component {

//static contextType = UserAuthenticContext;

    render() {
        console.log("Context API ",this.context)
        return (
            <div>
    <h1>{this.context.login? 'Hello':"Please Login"}</h1>
            </div>
        );
    }
}
Person.contextType = UserAuthenticContext;// above commented can write like this also
