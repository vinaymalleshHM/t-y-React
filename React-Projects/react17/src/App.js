import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import ButtonAppBar from './component/navbar/AppBar';


export default function App() {
  return (
    <>
      <ButtonAppBar/>
    </>
  )
}

