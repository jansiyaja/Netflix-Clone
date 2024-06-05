import { API_KEY } from "./Constants"

const Requests={

    trending :`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,

     action :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

    originals :`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,

    ComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,

    HorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,

    ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

    Documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default Requests
