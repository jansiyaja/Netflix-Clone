import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { user, logIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    
    if (!email) {
      setEmailError('Please enter a valid email address or phone number.');
      return;
    }

    if (!password) {
      setPasswordError('Password is required.');
      return;
    }

    try {
      await logIn(email, password);
      navigate('/home');
    } catch (error) {
      console.log(error);
      if (error.message.includes('email')) {
        setEmailError(error.message);
      } else if (error.message.includes('password')) {
        setPasswordError(error.message);
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="/src/Images/Banner.jpg"
        alt="Background"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50 flex justify-center items-center">
        <div className="max-w-[400px] w-full bg-black/75 p-8 text-white">
          <h1 className="text-3xl font-bold mb-8">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="relative">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={`p-3 bg-transparent rounded border ${
                  emailError ? 'border-red-600' : 'border-gray-600'
                } w-full`}
                type="email"
                placeholder="Email or mobile number"
                autoComplete="email"
              />
              {emailError && (
                <p className="text-red-600 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={`p-3 bg-transparent rounded border ${
                  passwordError ? 'border-red-600' : 'border-gray-600'
                } w-full`}
                type="password"
                placeholder="Password"
              />
              {passwordError && (
                <p className="text-red-600 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <button className="bg-red-600 py-3 rounded font-bold">Sign In</button>
            <div className="flex justify-between items-center text-md text-white mt-4">
              <p>
                <input type="checkbox" className="mr-2" /> Remember me
                <button class=" dark:ring-offset-slate-900 ...">
             
               </button>
              </p>
              <p className="hover:underline cursor-pointer">Need help?</p>
            </div>
            <p className="text-left text-gray-400 mt-3">
              New to Netflix?{' '}
              <Link to="/signup" className="text-white hover:underline">
                Sign up now.
              </Link>
            </p>
            <p className="text-gray-400 pt-3 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <span className="text-blue-500 cursor-pointer">Learn more.</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
