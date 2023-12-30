import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkFormData } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMG_URL } from '../utils/constant';

const Login = () => {
    const [isSignIn , setIsSignIn] =useState(true);
    const [errorMessage , setErrorMessage]=useState(null)
   
    const email=useRef();
    const password=useRef();
    const name=useRef();
    const dispatch=useDispatch();


    const toggleSignInForm=()=>{
       setIsSignIn(!isSignIn);
    } ;
    
    const validateFormData=()=>{

    const message= checkFormData(email?.current?.value , password?.current?.value  )
      setErrorMessage(message);

      if(message)return;

      if(!isSignIn){
        createUserWithEmailAndPassword(auth,email.current.value , password.current.value )
            .then((userCredential) => {
             const user = userCredential.user;
              updateProfile(user, {
              displayName: name.current.value,
            })
            .then(() => {
              const {uid ,email , displayName} = auth.currentUser;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName
              }))
              
            })
            .catch((error) => {
              setErrorMessage(error)
    
              })})
            .catch((error) => {
             const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+ "-"+errorMessage)
              })
                   }else{
                    signInWithEmailAndPassword(auth,email.current.value , password.current.value )
                    .then((userCredential) => {
                      const user = userCredential.user;
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setErrorMessage(errorCode+ "-"+errorMessage)
                    });
                   }



    }





  return (
   <div>

    <Header/>

 <div className="fixed md:absolute">
     <img className="h-screen object-cover md:h-auto" 
     src={BACKGROUND_IMG_URL}
     alt="background-img"
     />
 </div> 
    
  <form  onSubmit={(e)=>e.preventDefault()}
  className=" absolute bg-black bg-opacity-80 w-full  md:w-3/12 p-12  my-36  mx-auto left-0 right-0 text-white rounded-md  ">
    
      <h1 className="font-semibold text-3xl py-3">{isSignIn ? "Sign In" : "Sign Up"}</h1>

   {!isSignIn && 

   <input ref={name}
   className=" p-3 my-4 w-full  rounded-md bg-gray-700" type="text" placeholder="Full Name">

   </input> }

    <input ref={email}
     className="p-3 my-4 w-full  rounded-md bg-gray-700" type="text" placeholder="Email or phone number">

    </input>
    
    <input ref={password}
     className="p-3 my-4 w-full rounded-md bg-gray-700" type="password" placeholder="password">

    </input>
    
    <p className="text-red-500">{errorMessage}</p>
   

     <button className="bg-red-700 w-full p-3 my-6 rounded-md" onClick={validateFormData}>{isSignIn ? "Sign In" : "Sign Up"}</button>

     <p className="py-4 cursor-pointer" onClick={toggleSignInForm }>{isSignIn ? "New to Netflix? Sign Up now" : "Already registerd? Sign In now"}</p>
    
  </form>



 </div>

  )
}

export default Login