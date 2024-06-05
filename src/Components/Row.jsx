import axios from 'axios';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY } from '../constants/Constants';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState(null); // State to hold the YouTube video ID

  useEffect(() => {
    axios.get(fetchUrl)
      .then(response => {
        setMovies(response.data.results);
        console.log(response.data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching the movies:', error);
      });
  }, [fetchUrl]);

  const clickImage = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        console.log("Image clicked with ID:", response);
        const videos = response.data.results;
        if (videos.length > 0) {
          setVideoId(videos[0].key); // Assuming the first video is what you want to display
        } else {
          console.error('No videos found for this movie');
        }
      })
      .catch(error => {
        console.error('Error fetching the video:', error);
      });
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
            <div
              key={id}
              className='w-[160px] sm:w-[160px] md:w-[220px] lg:w-[280px] inline-block cursor-pointer relative p-2'
              onClick={() => clickImage(item.id)}
            >
              <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white flex items-center justify-center'>
                <p className='whitespace-normal text-sx md:text-xs font-bold h-full flex items-center text-center'>
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {videoId && 
       
          <YouTube videoId={videoId} opts={opts} />
        
      }
    </>
  );
};

export default Row;
