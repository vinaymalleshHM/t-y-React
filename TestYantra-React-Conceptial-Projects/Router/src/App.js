import React from 'react';
import './App.css';
// import Home from './components/home/home';
// import Login from './components/login/login';
// import CreateAccount from './components/createaccount/createaccount';
// import { Link, BrowserRouter as Router,Route} from 'react-router-dom';

import routing from './router'

function App() {
  return (
//     <Router>
//     <div>
//         <ul>
//             <li><Link to='/'>Home</Link></li>

//             <li><Link to='/login'>Login</Link></li>

//             <li><Link to='/createAccount'>CreateAccount</Link></li>
//         </ul>
//     </div>
//     <Route exact path='/' component={Home} />
//     <Route path='/login' component={Login} />
//     <Route path='/createAccount' component={CreateAccount} />
// </Router>
    routing
  );
}

export default App;
