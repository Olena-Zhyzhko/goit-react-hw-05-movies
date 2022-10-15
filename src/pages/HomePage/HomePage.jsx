import React from 'react';
import theMovieDbApi from 'components/fetchMovies';
// import { useState } from 'react';

export default function HomePage() {
    // const [movies, setMovies] = useState([])

    async function fetchImagesResult() {
        // setLoading(true);
            try {
                const responseData = await theMovieDbApi.fetchMovies();
                // handleResult(responseData);
                console.log(responseData);
            }
            catch (error) {
                // setError(error);
            }
            finally {
            //    setLoading(false)
            }
    };
    
    fetchImagesResult();

    // async function movies() {
    //     try {
    //     const response = await theMovieDbApi.fetchMovies();
    // }

  return (
    <div>HomePage</div>
  )
}
