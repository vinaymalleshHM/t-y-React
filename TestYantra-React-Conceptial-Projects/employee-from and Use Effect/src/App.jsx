import React, { useState } from 'react';
import './App.css';
import Login from './components/login-form/Login';
import Navbar from './components/navbar/Navbar';
import Hooks from './Hooks';
import UseEffect from './components/functional-component/UseEffect';
import ShowAccount from './components/show-account/ShowAccount';

function App() {

  const[showUse,setShowUse] = useState(true)
  return (
    <div>
      {/* <Navbar/>
      <Login/>
<Hooks/> */}
  {showUse ?<><UseEffect/>
  <button onClick={()=>setShowUse(false)}>Unmount</button>
  </>:null}
{/* <ShowAccount/> */}
    </div>
  );
}

export default App;
