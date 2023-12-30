import { createSlice } from "@reduxjs/toolkit";



const movieSlice=createSlice({
    name:"movie" ,
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topratedMovies:null,
        upcomingMovies:null,
        trendingMovies:null,
        isWatchingTrailer:false,
    },
    reducers:{
        addNowPlayingMovies :(state , action)=>{
           state.nowPlayingMovies = action.payload;
        },

        addTrailerVideo : (state , action)=>{
            state.trailerVideo = action.payload;
        },

        addPopularMovies : (state , action)=>{
            state.popularMovies = action.payload;
        },

        addTopratedMovies : (state , action)=>{
            state.topratedMovies = action.payload;
        },

        addUpcomingMovies : (state , action)=>{
            state.upcomingMovies=action.payload;
        },

        addTrendingMovies : (state , action)=>{
            state.trendingMovies=action.payload;
        },

        setIsWatchingTrailerTrue :(state)=>{
            state.isWatchingTrailer=true
        },

        setIsWatchingTrailerFalse :(state)=>{
            state.isWatchingTrailer=false
        }

    }
});

export const {addNowPlayingMovies , addTrailerVideo , addPopularMovies , 
               addTopratedMovies , addUpcomingMovies , 
                addTrendingMovies , setIsWatchingTrailerTrue , setIsWatchingTrailerFalse}= movieSlice.actions

export default movieSlice.reducer;