import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import NoRoute from './component/NoRoute';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

  
  render(){
    return (
    <Router>
    <Navbar/>
    <NoRoute/>
    </Router>
  );}
}

export default App;
