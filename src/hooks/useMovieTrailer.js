import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId)=>{

 const dispatch=useDispatch();

 const getVideoTrailer=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+ movieId+"/videos",API_OPTIONS);
    const json = await data.json();
     
     
     const trailer=json?.results.filter((video)=>video.name==="Official Trailer");
   
     dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getVideoTrailer();
    },[])



};

export default useMovieTrailer;