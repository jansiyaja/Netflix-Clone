import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';

const Index = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="relative w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="/src/Images/Banner.jpg"
          alt="Background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Unlimited movies, TV shows and more</h1>
          <p className="text-white text-lg tracking-wide mb-4">Watch anywhere. Cancel anytime.</p>
          <p className="text-white text-base mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
          <Link to={'/login'}>
            <button className="bg-red-600 text-white px-6 py-4 rounded font-bold">Get Started</button>
          </Link>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Index;
