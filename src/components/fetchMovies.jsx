import axios from 'axios';

// export default function theMovieDbApi() {
    
  const page = 1;
  const BASE_URL='https://api.themoviedb.org/3/';
  const MAIN_PAGE_URL = 'trending/movie/day';
  const KEY = '31ede725e11c94cc06cfdf663642b455';
//   const INFO_URL = 'movie/';
//   const SEARCH_URL = 'search/movie';
//   const GENRE_URL = '/genre/movie/list';
//     const FETCH_QUERY = '';


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
    // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export { fetchMovies, fetchMovieName, fetchOneMovie, fetchMovieCredits, fetchMovieReviews };
// async fetchMovies(){
      
//     const fetchRequest = await fetch(`${this.BASE_URL}${this.MAIN_PAGE_URL}?api_key=${this.KEY}&page=${this.page}`);
//     const data = await fetchRequest.json();

//     return data;
//     }

// async fetchGenres(){
//     const genresRequest = await fetch(`${this.BASE_URL}${this.GENRE_URL}?api_key=${this.KEY}`);
//     const list = await genresRequest.json();
//     return list.genres;
// }

// 

// 
// getPage(){
//     return this.page;
//     }
    
// setQuery(query) {
//     this.FETCH_QUERY = query
// }

// setPage(newPage){
//     this.page = newPage;
// }
// };
