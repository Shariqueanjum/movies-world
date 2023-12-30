import React, { useEffect } from 'react'
import Header from './Header';
import { useDispatch, useSelector} from 'react-redux';
import {  useParams } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import { setIsWatchingTrailerTrue } from '../utils/movieSlice';

const WatchTrailer = () => {
   
    const dispatch=useDispatch()
    const { id }=useParams();


     useEffect(()=>{
     dispatch(setIsWatchingTrailerTrue());
    

     },[])

  
  return (
    
       <div > 
        <Header/>
        <VideoBackground movieId={id}/>
        </div>
        
        
  )
}

export default WatchTrailer;