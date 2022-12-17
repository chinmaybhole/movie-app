import './App.css';
import React,{useState,useEffect} from 'react';

import {BrowserRouter as Router,Link} from 'react-router-dom';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=12292d9b64247f66fdf6fd4e59f6bd9f"
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=12292d9b64247f66fdf6fd4e59f6bd9f";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');


  const defaultSite = () => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }
  // useEffect to fetch popular movies api
  useEffect(defaultSite, [])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      // const url = `${API_URL}`

      // // var x = document.forms["search"]["text"].value;
      // console.log( `Search Text is ${e.target.value}`)
      // if ( e.target.value !== undefined) {
      //   const url=`${API_SEARCH}&query=${query}`;
      // }
      // else {
      //   alert("Empty search!")
      // }
    
      const url=`${API_SEARCH}&query=${query}`;

     if(!(query.length > 0 )) {
   
      return defaultSite();
      
      
     }
    
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler = (e) => {

    
     setQuery(e.target.value)
  }



  return (
    <Router>
    <div className="App">
    <>
   
  <div className="header">
  <Link to="/"><img className="icon-img" src= {require("./logo2.png")} alt = 'search icon' onClick={defaultSite}/></Link>
  
    <form action = "/" className = "search" onSubmit =  {searchMovie}>
      <input className = "text" type ="text" placeholder='Search for a movie ' 
      
      value = {query}
      onChange = {changeHandler}/>
      <button type="submit" className ="search-button" >
            <img src= {require('./search.png')} alt = 'search icon' /></button>
    </form>

  <hr/>
  <h3>Most Recent Movies</h3>
  </div>
  <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h3 className='nomovie'>Sorry !! No Movies Found</h3>
      )}
    </div>  
    </>
    </div>
</Router>
   
  );
}

export default App;
