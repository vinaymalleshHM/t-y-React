import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieInput from './component/MovieInput'
import DisplayMovies from './component/DisplayMovies'

class  App extends React.Component  {
 state={
  isLoading : false,
  isLink:false,
   movie:[],
   url : null
 }

  render(){

    return (
      <div>
       <MovieInput action={this.handleChange} />
     {this.state.isLoading? <DisplayMovies  movielist={this.state.movie}/>:<h1>type to Search</h1>} 
       
      </div>
    );
  }


  handleChange = (input) =>{

    this.setState({
     isLink:true,
     isLoading : !this.state.isLoading,
     url :`http://www.omdbapi.com/?s=${input}&apikey=d2d0a0ca`

      },this.fetchMovies)  
   
  }
  
  

   fetchMovies() {
   
     fetch(this.state.url)
     .then(response => response.json())
     .then(jsonResponse => {
       if (jsonResponse.Response === "True") {     
             this.setState({
              movie: jsonResponse.Search,
              isLoading:true
         });
       } 
       console.log(this.state.movie)
     }
     
     );}
      
     
}

 


export default App;
