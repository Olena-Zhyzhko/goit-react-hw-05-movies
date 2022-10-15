import React from 'react';
import { fetchMovies } from 'components/fetchMovies';
import { useState, useEffect } from 'react';
import HomePagesItems from 'components/HomePagesItems';

export default function HomePage() {
    const [movies, setMovies] = useState([])

    async function fetchImagesResult() {
        // setLoading(true);
            try {
                const responseData = await fetchMovies();
                // const data = await responseData.json();
                // handleResult(responseData);
                console.log(responseData);
                setMovies(responseData.results);
                // return data;
            }
            catch (error) {
                // setError(error);
            }
            finally {
            //    setLoading(false)
            }
        };
    
    useEffect(() => {
        console.log('мщнтування');
    // setMovies(fetchImagesResult());
        
        // const pop =
            fetchImagesResult();
        // console.log(pop);
        // setMovies(pop);
}, [])


    // fetchImagesResult();

  return (
          <ul>
              <HomePagesItems films={movies} />

          </ul>
  )
}
