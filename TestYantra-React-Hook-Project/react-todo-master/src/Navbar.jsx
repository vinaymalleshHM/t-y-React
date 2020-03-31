import React, { useContext } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import UserContext, { UserConsumer } from './userContext';
import Form from './Form';
import Logout from './Logout';

function Navbar(){
const context = useContext(UserContext)
 
return(<Router>
    <div>
      <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h4  className="navbar-brand">Recipie App</h4>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav offset-11 mt-lg-0">
            <li className="nav-item ml-auto">
            <UserConsumer>
                {
                    (context)=>{
                      console.log(context.login)
                 return(<div>
{context.login? <Link to='/logout' onClick={()=>{context.setLogout(false)}} >logout</Link> 
                :<Link to='/login'onClick={()=>{context.setLogout(true)}}>login</Link>
                 } </div>)
                    }
                }
            </UserConsumer>
            {/* <Link onClick={()=>{context.setLogout(false)}}>logout</Link>
                :<Link onClick={()=>{context.setLogout(true)}}>login</Link> */}

            </li>
            
          </ul>
  
        </div>
      </nav>
    </div>
    {context.details?  null: <Route path='/login' component={Form} />}
    <Route path='/logout' component={Logout} />
  
    <footer className="card fixed-bottom bg-primary">
    <h1 className="card-header offset-5">
      Footer
    </h1>
    
  </footer>
  </Router>)

}
export default Navbar
