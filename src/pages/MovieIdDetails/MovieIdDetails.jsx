import React from 'react';
import { useState, useEffect } from 'react';
import { fetchOneMovie } from 'components/fetchMovies';
import { useParams, useLocation, Link } from 'react-router-dom';
import SingleMovie from 'components/SingleMovie/SingleMovie'
import AdditionalInfo from 'components/SingleMovie/AdditionalInfo'
import Loader from 'components/Loader/Loader'

export default function MovieIdDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchMoviesResult(id) {
        setLoading(true);
        try {
            const responseData = await fetchOneMovie(id);
            setMovie(responseData.data);
            }
            catch (error) {
                setError(error);
            }
            finally {
               setLoading(false)
            }
        };
    
    useEffect(() => {
        fetchMoviesResult(movieId);
    }, [movieId])


    return (
      <>
            {error && <p>error massage{error.massage}</p>}
            {loading && <Loader>Загружаем</Loader>}
            {movie &&
                <div>
                    <Link to={location.state?.from}>Go back</Link>
                    <SingleMovie movie={movie} />
                    <AdditionalInfo id={movieId} />
                </div>
            }
      </>
  )
}
