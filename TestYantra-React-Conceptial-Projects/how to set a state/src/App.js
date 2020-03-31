import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  const [name, setName] = useState('Dimple')
  return (
  <Router>
    <Link to="/parent">Go to Parent</Link>
    {/* <Route exact path='/parent' component={Parent} /> */}
    <Route exact path='/parent' render={(props)=>{
      console.log('Props Object ',props)
      return <Parent uname={name} />
    }} />

    <Route exact path='/' render={()=>{
      return <h1>Home Page</h1>
    }}  />

  {/* <Parent/> */}



  </Router>     
  );
}

export default App;
