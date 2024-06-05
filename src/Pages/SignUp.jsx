import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


const SignUp = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('');
const {user,signUp}=useAuth();
const navigate=useNavigate();
 
const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    await signUp(email,password)
    navigate('/home')

  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="relative w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="/src/Images/Banner.jpg"
        alt="Background"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50 flex justify-center items-center">
        <div className="max-w-[400px] h-[550px] w-full bg-black/75 p-8 text-white">
          <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
          <form className="flex flex-col space-y-4  " onSubmit={handleSubmit}>
            <input
            onChange={(e)=>setEmail(e.target.value)}
              className="p-3 bg-transparent rounded border border-gray-600 "
              type="email"
              placeholder="Email "
            />
            <input
            onChange={(e)=>setPassword(e.target.value)}
              className="p-3 bg-transparent rounded border border-gray-600"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-600 py-3 rounded font-bold">Sign Up</button>
            <div className="flex justify-between items-center text-md text-white">
              <p>
                <input type="checkbox" className="mr-2 mt-2 size-4" /> Remember me
              </p>
            </div>
            <p className="text-left text-gray-400 mt-3">
             Already have account?{' '}
              <Link to="/login" className="text-white hover:underline">
                Sign In
              </Link>
            </p>
            <p className=" text-gray-400 pt-3 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <span className="text-blue-500 cursor-pointer">Learn more.</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
