import React, { useContext } from 'react'
import UserContext, { UserConsumer } from '../../context/userContext';

export default function Form() {


 const onClickForm = (event) => {
    event.preventDefault();
  }
  return (
    <>
    
      <div className="card col-md-4 offset-4 mt-5">
        <div className="card-body">
          <form onSubmit={onClickForm} className="form-group">
          <h1 className="card-title offset-4">Login</h1>
            <div className="form-group">
              <label for="">Email Adress</label>
              <input type="text" className="form-control"  placeholder="Enter email" />
              {/* <p style={regStyle}>{this.state.errors.emailid}</p> */}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="text" className="form-control" placeholder="Password" />
              {/* <p style={regStyle}>{this.state.errors.password}</p> */}
              
            </div>
            <UserConsumer>
                {
                    (context)=>{
                 return(<div>
<button type="submit" className="btn btn-primary offset-4" onClick={()=>context.setDetail(true)}>Submit</button>
</div>)
                    }
                }
            </UserConsumer>
          </form>
        </div>
      </div>
    </>
  )
}
