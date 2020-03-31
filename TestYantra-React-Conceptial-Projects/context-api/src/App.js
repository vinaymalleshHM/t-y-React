import React from 'react';
import './App.css';
import ComponentD from './components/ComponentD';
import { UserProvider } from './context/userContext';

function App() {

const user = {
  username : 'Dimple',
  setUserName : (uname)=>{
    alert('Passed name '+uname)
  }
}

  return (
    <div>
{/* <UserProvider value="chinnu..."> */}
<UserProvider value={user}>
<ComponentD/>
</UserProvider>


    </div>
  );
}

export default App;
