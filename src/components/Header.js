import React from 'react'
import { signOut } from "firebase/auth";
import {auth } from '../utils/firebase'
import {  useDispatch, useSelector } from 'react-redux';
import { LOGO_URL , USER_AVATAR_URL } from '../utils/constant';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/languageSlice';

import { useNavigate } from 'react-router-dom';
import { setIsWatchingTrailerFalse } from '../utils/movieSlice';



const Header = () => {

  const navigate=useNavigate();
  const dispatch =useDispatch();
  const user =useSelector(store=>store.user);
  const isWatchingTrailer=useSelector(store=>store.movie.isWatchingTrailer)
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
 
  
  const handleSignOut =()=>{

    signOut(auth)
    .then(() => {})
   .catch((error) => {
     
   });
  }

  const handleGptSearchClick =()=>{
       dispatch(toggleGptSearch())
  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  const handleIswatchingTrailer=()=>{
    dispatch(setIsWatchingTrailerFalse());
    navigate("/browse")
    
  }




  return (
    <div className="absolute w-screen px-8 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        
        <img className="w-44 mx-auto md:mx-0"
        src={LOGO_URL}
        alt="logo"
        />
       
       {user &&
         <div className="flex p-1 md:p-4">

           {showGptSearch && <select onChange={handleLanguageChange}
           className="py-0 px-2 mx-2  md:py-2 md:px-4 md:mx-3 bg-black bg-opacity-60 text-white rounded-md">
            <option className="bg-black bg-opacity-60" value="en">English</option>
            <option className="bg-black bg-opacity-60" value="hn">Hindi</option>
           </select>}

           {isWatchingTrailer &&
           <button onClick={handleIswatchingTrailer} 
          className="py-2 px-4 mx-3  bg-gray-600 text-white  rounded-md" 
            >
             Home
            </button>
          }
            
           

          <button 
          className={" py-0 px-2 mx-2  md:py-2 md:px-4 md:mx-3 " +(showGptSearch ? "bg-black bg-opacity-60" :"bg-gray-700") +" text-white  rounded-md" }
          onClick={handleGptSearchClick}>
            { showGptSearch ? "Home Page" : "Gpt Search"    }
            </button>

           <img className="w-9 h-10 mx-0   md:w-9 md:h-10 md:mx-0" alt="useravatar" src={USER_AVATAR_URL}/>

           <button 
           className=" md:p-1  font-medium text-white"
           onClick={handleSignOut}
           >(Sign Out)</button>
          </div>
        }


    </div>


   
    
    
  )
}

export default Header