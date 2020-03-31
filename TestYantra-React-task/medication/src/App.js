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
    input:null,
    setInput: val =>{
      handleInput(val)
    }
}
const [data, setData] = useState(userDetail)

const handleInput =(e)=>{
  setData({
    ...data,
    input:e
  })
}
const handleChange = (val) => {

  setData({
      ...data,
      login: val
  })
}

// productName: '',
// company: '',
// price: '',
// qty: '',
// proImg: '',
// description:'',


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
