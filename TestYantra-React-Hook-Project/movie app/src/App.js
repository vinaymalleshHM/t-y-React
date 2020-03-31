import React,{useState} from 'react';
import './App.css';
import MovieInput from './component/MovieInput'
import DisplayMovies from './component/DisplayMovies'
import Navbar from './component/Navbar';
import { UserProvider } from './userContext';


function  App ()  {
 
 const  movie =[ ];
   

const [isLoading, setIsLoading] = useState(false);
const [isLink, setIsLink] = useState(false);
const [url,setURL] = useState(null)
const [movie1,setMovie] = useState(movie)

const userDetail = {
  login: true,
  details: false,
  setLogout: val => {
    handleChangeLogin(val)
  },
  setDetail: val => {
    handleChangeLogin1(val)
  }
}
 
const [con,setCon]= useState(userDetail)

const handleChangeLogin =(val)=>{
  setCon({
    ...con,
    login :val
  })
}
const handleChangeLogin1 = (val) => {
  setCon({
    ...con,
    details: val
  })
}
const handleChange =(input)=>{
  setURL(`http://www.omdbapi.com/?s=${input}&apikey=d2d0a0ca`);
  setIsLoading(!isLoading)
  fetch(url)
  .then(response => response.json())
  .then(jsonResponse => {
    if (jsonResponse.Response === "True") {     
     setMovie(jsonResponse.Search)
    } 
  }
 
  ); 
  //mov()
}

    return (
    <>
      <UserProvider  value={con}>
   <Navbar/>
    </UserProvider>
      {con.details?<div>
       <MovieInput action={handleChange} />
     {isLoading? <DisplayMovies  movielist={movie1}/>:<h1>type to Search</h1>} 
       
      </div>:null}
      </>
    );
      
    //  function mov(){
    
    //  }
}

 


export default App;
