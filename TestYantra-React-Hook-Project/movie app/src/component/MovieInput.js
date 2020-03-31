import React from 'react';
import "./MovieInput.css";


function MovieInput(props){

      
      return (<div>
          
      <div className="col-md-4 offset-3">
          
       <input className="form-control mt-5" width="20%"  onChange={e => props.action(e.target.value)} placeholder="Search Movie..."></input>
       </div>
        </div>);
}
export default MovieInput;

