import React from 'react'
import './DisplayMovie.css'

function DisplayMovies(props) {

    console.log(props.movielist);
    // let poster;
    // let title;
    // let year;
    // let iD;
    // let type;
    // let obj;

    for (let key in props.movielist) {

        //console.log( props.movielist[key].Title);
        //  props.movielist.map((Search) =>{console.log(Search[key]);
        //  })


        //     // for (const i in obj) {

        //     //      title = obj[i].Title
        //     //      poster = obj[i].Poster
        //     //      year = obj[i].Year
        //     //      iD = obj[i].imdbID
        //     //      type = obj[i].Type

        //     // console.log(obj[i].Title);
        //     // console.log(obj[i].Poster);
        //     // console.log(obj[i].Year);
        //     // console.log(obj[i].imdbID);
        //     // console.log(obj[i].Type);


        //     // }

    }
    //          console.log(poster);






    return (
        <div className="col-md-12">
            <div>
                {props.movielist.map((movies) => {

                    return(
                    <div className="card float-left" key={movies.imdbID} >


                        <div className="card-body">
                            <img src={movies.Poster} className="card-img-top" id="test"></img>
                            <h4 className="card-title">{movies.Title};</h4>
                            <p className="card-text">{movies.Year};</p>
                            <p className="card-text">{movies.Type};</p>
                            <p className="card-text">{movies.imdbID};</p>

                        </div>

                    </div>


                )})
                }

            </div>

        </div>

    )



}




export default DisplayMovies;
