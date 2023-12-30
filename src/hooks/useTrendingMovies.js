import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = ()=>{

 const trendingMovies=useSelector(store=>store.movie.trendingMovies)
 const dispatch = useDispatch();

  const getTrendingMovies = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/trending/all/day" , API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));

  }
  
  useEffect(()=>{
    
    if(!trendingMovies) getTrendingMovies();
  },[])

}


export default useTrendingMovies ;