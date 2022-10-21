import React from 'react'
import { fetchMovieName } from 'components/fetchMovies';
import { useState, useEffect } from 'react';
import SearchMovieItems from 'components/SearchMovie/SearchMovieItems';
import { useSearchParams, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader'
import { toast } from 'react-toastify';



export default function SearchMovie({ searchMovie }) {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const query = searchParams.get('query') ?? ''
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchMoviesResult(searchName) {
        setLoading(true);
            try {
                const responseData = await fetchMovieName(searchName);
                handleResult(responseData);
                setMovies(responseData.data.results);
            }
            catch (error) {
                setError(error);
            }
            finally {
               setLoading(false)
            }
    };

    function handleResult(responseData) {
        const searchResult = responseData.data.results;

        if (searchResult.length === 0) {
            return toast.error("Sorry, there are no images matching your search query. Please try again.");
        } else {
                toast.success(`Hooray! We found some movies for you.`);
            }
        }

    
    const changeQuery = (movieName) => {
        setSearchParams(movieName !== '' ? {query: movieName} : {})
    }
    
    useEffect(() => {
        if (searchMovie === '') {
            return
        }
        changeQuery(searchMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchMovie])

    useEffect(() => {
        if (query === '') {
            return
        }
            fetchMoviesResult(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    

  return (
    <ul>
        {error && <p>{error.massage}</p>}
        {loading && <Loader>Загружаем</Loader>}
        {movies.length > 0 &&
            <SearchMovieItems films={movies} location={location} />
        }
    </ul>
  )
}

SearchMovie.propTypes = {
    searchName: PropTypes.string, 
}