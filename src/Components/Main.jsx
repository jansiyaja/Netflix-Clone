import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Requests from '../constants/Urls';
import { imageUrl } from '../constants/Constants';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(Requests.trending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log(movie);

  return (
    <>
      <div className='relative w-full h-[550px] text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          {movie && (
            <img
              src={`${imageUrl}${movie.backdrop_path}`}
              alt={movie.title}
              className='w-full h-full object-cover'
            />
          )}
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='font-bold text-3xl md:text-5xl'>{movie?.title}</h1>
            <div className='my-4'>
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                Play
              </button>
              <button className='border text-white py-2 px-5 ml-4 border-gray-300'>
                Watch Later
              </button>
            </div>
            <p className='text-gray-400 text-sm'>Released Date: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] xl:max-w-[35%] text-gray-200'>
              {movie?.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
