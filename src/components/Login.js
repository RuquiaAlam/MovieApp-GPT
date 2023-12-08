import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>
  {
setIsSignInForm(!isSignInForm);


  }
  return (
    <div>

  
   
    

  <Header/>
<div className="absolute bg-black/80  bg-opacity-80  ">
<img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="logo"/>
</div>

<form className= "w-3/12 absolute p-12   bg-black  bg-opacity-70 my-36 mx-auto right-0 left-0 text-white rounded-lg">
    <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
  <input type="text" placeholder="Email Address" className="p-4 my-4 w-full opacity-70 bg-gray-800"/>
 {!isSignInForm  &&<input type="name" placeholder="Full Name" className="p-4 my-4 w-full opacity-70 bg-gray-800"></input>} 
       <input type ="password" placeholder="Password" className="p-4 my-4 w-full opacity-70 bg-gray-800"/>

       <button className="p-4 my-6 bg-red-700 w-full rounded-lg opacity-60">{isSignInForm?"Sign In":"Sign Up"}</button>
       <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >{isSignInForm?"New to Netflix ?Sign Up Now":"Already registered?Sign In Now. "}</p>
        </form>
      
 
       </div>
     
    


   

   
  );
}

export default Login