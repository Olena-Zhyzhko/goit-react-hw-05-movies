import React from 'react'
import { fetchMovieName } from 'components/fetchMovies';
import { useState, useEffect } from 'react';
import SearchMovieItems from 'components/SearchMovie/SearchMovieItems';


export default function SearchMovie({ searchMovie }) {
    const [movies, setMovies] = useState(() => {
        return JSON.parse(window.localStorage.getItem('searchMovie')) ?? []
    })

    async function fetchMoviesResult(searchName) {
        // setLoading(true);
            try {
                const responseData = await fetchMovieName(searchName);
                // handleResult(responseData);
                // console.log(responseData);
                setMovies(responseData.data.results);
                    console.log(responseData);


            }
            catch (error) {
                // setError(error);
            }
            finally {
            //    setLoading(false)
            }
        };
    
    useEffect(() => {
        if (searchMovie === '') {
            return
        }
            fetchMoviesResult(searchMovie);
    }, [searchMovie])

    useEffect(() => {
        localStorage.setItem('searchMovie', JSON.stringify(movies));
    }, [movies])

  return (
        <ul>
              <SearchMovieItems films={movies} />

          </ul>
  )
}
