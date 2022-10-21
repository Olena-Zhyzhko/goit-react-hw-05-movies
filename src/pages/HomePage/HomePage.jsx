import React from 'react';
import { fetchMovies } from 'components/fetchMovies';
import { useState, useEffect } from 'react';
import HomePagesItems from 'components/HomePagesItems';
import Loader from 'components/Loader/Loader'


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchMoviesResult() {
        setLoading(true);
            try {
                const responseData = await fetchMovies();
                setMovies(responseData.results);
            }
            catch (error) {
                setError(error);
            }
            finally {
               setLoading(false)
            }
        };
    
    useEffect(() => {
        if (movies === []) {
            return;
        }
        fetchMoviesResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <ul>
        {error && <p>{error.massage}</p>}
        {loading && <Loader>Загружаем</Loader>}
        {movies.length > 0 &&
              <HomePagesItems films={movies} />
        }
    </ul>
  )
}
