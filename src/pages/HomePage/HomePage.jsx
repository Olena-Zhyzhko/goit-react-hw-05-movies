import React from 'react';
import { fetchMovies } from 'components/FetchMovies';
import { useState, useEffect } from 'react';
import HomePagesItems from 'components/HomePagesItems';

export default function HomePage() {
    const [movies, setMovies] = useState(() => {
        return JSON.parse(window.localStorage.getItem('popularMovie')) ?? []
    })

    async function fetchMoviesResult() {
        // setLoading(true);
            try {
                const responseData = await fetchMovies();
                // handleResult(responseData);
                // console.log(responseData);
                setMovies(responseData.results);
                        // localStorage.setItem('popularMovie', JSON.stringify(movies));

            }
            catch (error) {
                // setError(error);
            }
            finally {
            //    setLoading(false)
            }
        };
    
    useEffect(() => {
        if (movies === []) {
            return;
        }

        fetchMoviesResult();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

        useEffect(() => {
        localStorage.setItem('popularMovie', JSON.stringify(movies));
    }, [movies])


  return (
          <ul>
              <HomePagesItems films={movies} />
          </ul>
  )
}
