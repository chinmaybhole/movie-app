import './App.css';
import React,{useState,useEffect} from 'react';
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

  // useEffect for search query api
  // useEffect(() =>{
  //   fetch(`${API_SEARCH}&query=${query}`)
  //   .then((res)=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setMovies(data.results);

  // })},[query])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`${API_SEARCH}&query=${query}`;
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
    console.log(e.target.value)
     setQuery(e.target.value)
  }

  return (
    <>
  <div className="header">
  <img className="icon-img" src= {require("./logo2.png")} alt = 'search icon' />
    <form action = "#" className = "search" onSubmit =  {searchMovie}>
    <input type ="text" placeholder='Search for a movie ' 
    
    value = {query.length > 0 ? query : defaultSite}
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
        <h3>Sorry !! No Movies Found</h3>
      )}
    </div>  
    </>
  );
}

export default App;
