import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import { openai } from '../utils/openai';

const GptSearchBar = () => {
 const defaultLanguage =useSelector(store=>store.language.defaultLanguage);
 const searchedText=useRef(null);

//we will use  this feature later bcz api's are not free
//  const hanldeGptSearch =async()=>{
   
//   const gptResults=await openai.chat.completions.create({
//     messages: [{ role: 'user', content: searchedText.current.value }],
//     model: 'gpt-3.5-turbo',
//   });
//   console.log(gptResults.choices);
//   console.log(searchedText.current.value);

//  }

  return (
    
  <div  className="pt-[60%] md:pt-[10%] flex justify-center">

    <form onSubmit={(e)=>e.preventDefault()}
     className=" w-full md:w-1/2 
      flex items-center 
      z-10 rounded-lg
      bg-black 
       bg-opacity-60">

      <input ref={searchedText}
      className="p-4 my-4 mx-3 w-3/4" 
      type="text" 
      placeholder={lang[defaultLanguage].gptSearchPlaceholder} />

      <button 
      className="bg-red-700  w-[22%] mr-4 py-4 px-2 text-white rounded-md">
        {lang[defaultLanguage].search}
        </button>

    </form>

  </div>
  



 
  )
}

export default GptSearchBar ;