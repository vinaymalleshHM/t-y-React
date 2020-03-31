import React from 'react';
import "./MovieInput.css";


function MovieInput(props){

      
      return (<div>
          <header className="card-header" id="test1"><div className="col-md-3 offset-5"><h3>Movie App</h3></div></header>
      <div className="col-md-6 offset-3">
          <label>Search :</label>
       &nbsp; <input className="form-control" width="20%"  onChange={e => props.action(e.target.value)} placeholder="Search Movie..."></input>
       </div>
        </div>);
}
export default MovieInput;

