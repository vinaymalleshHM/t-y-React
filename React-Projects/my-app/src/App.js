import React, { useState, useContext } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UserContext, { UserProvider } from './context/userContext';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const userDetail = {
    login: false,
    setLogin : val =>{
      handleChange(val)
    },
    navbar:false,
    setNavbar: val => {
      handleMode(val)
  },
  findUser:'',
  setUser : val =>{
    handleUser(val)
  }

}
const [data, setData] = useState(userDetail)

const handleUser = (val)=>{
  setData({
    ...data,
    findUser:val
  })
}

const handleChange = (val) => {

  setData({
      ...data,
      login: val
  })
}
const handleMode = (val) => {
  setData({
      ...data,
      mode: val
  })
}


  return (
    <>
    <Router>
    <UserProvider value={data}>
      <Navbar/>
      </UserProvider>

    </Router>
    </>
  );
}

export default App;
