import React,{useState} from 'react';
import './App.css';
import { UserProvider } from './context/userAuthentication';
import Home from './components/home/Home';
import PersonList from './components/person-list/PersonList';
import PersonDetails from './components/person-details/PersonDetails';
import Logout from './components/logout/Logout';
import Person from './components/person/Person';
import Refs from './components/refs/Refs';
import UseRefs from './components/userefs/UseRefs';

function App() {

const userDetail ={
  login: true,
  userName:'Dimple',
  setLogout :val =>{ 
    handleChange(val)
  }
}
const [con,setCon]= useState(userDetail)
 
const handleChange=(val)=>{
  //console.log(val)
  setCon({
    ...con,
    login :val
  })
}


  return (
    // <div>
    <>
      <UserProvider  value={con}>
        <Home/>
        <PersonList/>
        <PersonDetails/>
        <Logout/>
        <Person/>
        <Refs/>
        <UseRefs/>
      </UserProvider>
    {/* </div> */}
    </>
  );
}

export default App;
