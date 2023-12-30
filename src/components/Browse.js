import React  from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import {  useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  useTrendingMovies();





  return (
    <div className="">
      <Header/> 
      {showGptSearch ? <GptSearchPage/> :
       <>
      <MainContainer/>
      <SecondaryContainer/>
       </>
}
      

       
    </div>
  )
}

export default Browse