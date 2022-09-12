import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './css/movie.css'

function App() 
{
//Defining variables
const [search,setsearch] = useState('')
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity_desc&api_key=24603bf8355365e4733e9efdb5aa5847&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=24603bf8355365e4733e9efdb5aa5847&query="';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'


//Accessing Data from Restful API using axios method inside the useEffect Hook
useEffect(()=>{
  axios.get(API_URL)
  .then(res=>{
    showMovies(res.data.results)
  }).catch(err=>{
      alert(err)
  })
})
//End of iseEffect Hook

//get Movies function(fetch method)
async function getMovies(url){
    //alert(url)
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results);
}
// End of getMovies function

//Show Movies on the user interface function
const showMovies = (movies)=>{
  const main = document.getElementById('main')
  main.innerHTML = '<div></div>'
  movies.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `<div class="movie">
    <img src="${IMG_PATH+poster_path}" 
    alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class='${getClassByRate(vote_average)}'>${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
</div>`

main.appendChild(movieEl)
  });
}
//End of Show Movies function

//Utility function to get the class name depending on the condition
function getClassByRate(vote){
  if(vote >= 8)
  {
      return 'green'
  }
  else if(vote >=5){
      return 'orange'
  }
  else{
      return 'red'
  }
}
//End of Utility function 

//Search function
const handleSubmit = (e)=>{
  e.preventDefault()

    if(search && search!==''){
     
        getMovies(SEARCH_API+search);

        setsearch('')
    } else{
        window.location.reload()
    }
}
//End of Search Function



  return (
    <div className="App">
      <header>
        <form id="form" onSubmit={handleSubmit}>
            <input type="text" id="search" className="search" placeholder="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/> 
        </form>
      </header>
      <main id="main">
      
      </main>
    </div>
  );
}

export default App;
