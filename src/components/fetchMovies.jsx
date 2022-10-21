import axios from 'axios';

  const page = 1;
  const BASE_URL='https://api.themoviedb.org/3/';
  const MAIN_PAGE_URL = 'trending/movie/day';
  const KEY = '31ede725e11c94cc06cfdf663642b455';

    const fetchMovies = async () => {
    const responce = await axios.get(`${BASE_URL}${MAIN_PAGE_URL}?api_key=${KEY}&page=${page}`);
    return responce.data;
}

const fetchMovieName = async (searchName) => {
    const fetchResult = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&include_adult=false&query=${searchName}`);
    return fetchResult;
}

const fetchOneMovie = async (id) => {
    const oneMovieRequest = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`);
    return oneMovieRequest;
    }

const fetchMovieCredits = async (id) => {
    const oneMovieCredits = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`);
    return oneMovieCredits;
    }

const fetchMovieReviews = async (id) => {
    const oneMovieCredits = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`);
    return oneMovieCredits;
}

export { fetchMovies, fetchMovieName, fetchOneMovie, fetchMovieCredits, fetchMovieReviews };
