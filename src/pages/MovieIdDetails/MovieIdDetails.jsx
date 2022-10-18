import React from 'react';
import { useState, useEffect } from 'react';
import { fetchOneMovie } from 'components/fetchMovies';
import { useParams, useLocation, Link } from 'react-router-dom';
import SingleMovie from 'components/SingleMovie'
import AdditionalInfo from 'components/AdditionalInfo'




export default function MovieIdDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState(null);

    async function fetchMoviesResult(id) {

        // setLoading(true);
        try {
                console.log(id);
                
                const responseData = await fetchOneMovie(id);
                // handleResult(responseData);
                // console.log(responseData);
            setMovie(responseData.data);
            // localStorage.setItem('singleMovie', JSON.stringify(movie));

            }
            catch (error) {
                // setError(error);
            }
            finally {
            //    setLoading(false)
            }
        };
    
    useEffect(() => {
        fetchMoviesResult(movieId);
    }, [movieId])


    if (!movie) {
        return null;
    }

    

  return (
      <div>
          <Link to={location.state?.from}>Go back</Link>;
          <SingleMovie movie={movie} />
          <AdditionalInfo id={movieId} />
      </div>
  )
}
