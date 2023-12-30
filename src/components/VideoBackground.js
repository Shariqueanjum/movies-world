import React  from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  
  const isWatchingTrailer=useSelector(store=>store.movie.isWatchingTrailer);
    useMovieTrailer(movieId)

    const trailer=useSelector(store=>store.movie?.trailerVideo);

    if(!trailer)return

    


  return (
      <div className=" w-screen">
    <iframe 
      className="w-screen h-screen  md:h-auto aspect-video" 
    src={"https://www.youtube.com/embed/"+trailer[0]?.key +"?rel=0&loop=1&controls="+(isWatchingTrailer ? 1 : 0)+"&showinfo=0&autoplay=1&mute=" +(isWatchingTrailer ? 0 : 1)} 
    title="YouTube video player" 
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen 
      >
    </iframe>
    </div>

  )
}

export default VideoBackground