import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMG_URL } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <>

    <div className="absolute">
    <img className="h-screen object-cover  md:h-auto" 
    src={BACKGROUND_IMG_URL}
    alt="background-img"
    />
    </div> 


    <div className="">
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearchPage ;