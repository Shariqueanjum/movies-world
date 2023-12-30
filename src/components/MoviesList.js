import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'


const MoviesList = ({title , movies}) => {

  

    if(!movies)return
    
  return (
    <div className="md:px-6 ">
         <h1 className=" text-lg font-medium py-4 text-white">{title}</h1>

        <div className="flex overflow-x-scroll scrollbar-hide">
       <div className="flex ">
       {movies.map(movie=> <Link to={'/watch/'+movie.id} key={movies.id}><MovieCard  posterPath={movie.poster_path} /></Link> )}
       

       </div>

       
     </div>
    </div>
  )
}

export default MoviesList ;