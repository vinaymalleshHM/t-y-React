import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './component/recipelist/Recipelist'
import RecipeDetails from './component/recipedetails/Recipedetails'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import { UserProvider } from './context/userContext';
import Form from './component/form/Form';


// import Login from './components/login/login';


class App extends React.Component {

  state = {
    login: false,
    setLogin: val => {
      this.handleChange(val)
    },
    details: false,
    setDetail: val => {
      this.handleChangeLogin(val)
    }
  }
  handleChange = (val) => {

    this.setState({
      ...this.state,
      login: val
    })

  }

  handleChangeLogin = (val) => {
    this.setState({
      ...this.state,
      details: val
    })
  }

  render() {
    return (
      <>
        <UserProvider value={this.state}>

          <Navbar />

        </UserProvider>
        {/* */}
      </>
    );

  }



}

export default App;
