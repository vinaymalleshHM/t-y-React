import React from 'react'
import './DisplayMovie.css'

function DisplayMovies(props) {

    console.log(props.movielist);
    
    return (
        
            <div>
                {props.movielist.map((movies) => {

                    return(
                    <div className="float-left col-md-3 mt-3 offset-0" key={movies.imdbID} >
                        <div className="card p-2">
                            <img src={movies.Poster} className="card-img-top" id="test" alt="no img"></img>
                            <h4 className="card-title">{movies.Title};</h4>
                            <p className="card-text">{movies.Year};</p>
                            <p className="card-text">{movies.Type};</p>
                            <p className="card-text">{movies.imdbID};</p>
                            <button className="btn-outline-primary">Watch</button>

                        </div>

                    </div>

                )})
                }

            </div>

    )



}




export default DisplayMovies;
