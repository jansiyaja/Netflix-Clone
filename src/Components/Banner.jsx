import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      
      <div className="relative flex justify-center items-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Enjoy on your TV</h1>
          <p className="text-xl md:text-2xl left-1/3">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </p>
        </div>
        <div className="absolute right-10 bottom-10 hidden md:block">
        <video
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" 
        autoPlay
        loop
        muted
      />
        </div>
      </div>
    </div>
  );
};

export default Banner;
