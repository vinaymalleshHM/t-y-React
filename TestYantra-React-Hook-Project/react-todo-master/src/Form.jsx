import React, { useContext } from 'react'
import UserContext, { UserConsumer } from './userContext';

export default function Form() {
  const onClickForm = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <div className="card col-md-4 offset-4 mt-5">
        <div className="card-body">
          <form onSubmit={onClickForm}>
          <h1 className="card-title offset-4">Login</h1>
            <div className="form-group">
              <label for="">Email Adress</label>
              <input type="text" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="text" className="form-control" placeholder="Password" />
            </div>
            <UserConsumer>
                {
                    (context)=>{
                 return(<div>
<button type="submit" className="btn btn-primary" onClick={()=>context.setDetail(true)}>Submit</button>
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
