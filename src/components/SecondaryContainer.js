import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movie)
  return (
    
    
  
   <div className="bg-black">

    <div className=" -mt-0  md:-mt-48 relative z-20 pl-8">
    <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
    <MoviesList title={"Top-Rated"} movies={movies.topratedMovies}/>
    <MoviesList title={"Trending"} movies={movies.trendingMovies}/>
    <MoviesList title={"Popular"} movies={movies.popularMovies}/>
    </div>

   </div>



    
  )
}

export default SecondaryContainer