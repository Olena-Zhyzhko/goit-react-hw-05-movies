import React from 'react';
import { fetchMovieReviews } from 'components/fetchMovies'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader'


export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchMoviesReviews(id) {
        setLoading(true);
            try {
                const responseData = await fetchMovieReviews(id);
                setReviews(responseData.data.results);
                console.log(responseData);
            }
            catch (error) {
                setError(error);
            }
            finally {
               setLoading(false)
            }
        };
    
    useEffect(() => {
        fetchMoviesReviews(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

     if (!reviews) {
        return null;
    }
    console.log(reviews);

    return (
        <ul>
            {error && <p>{error.massage}</p>}
            {loading && <Loader>Загружаем</Loader>}
            {reviews.length > 0 &&
                reviews.map(({ id, author, content }) => (
                    <li key={id} className="ImageGalleryItem">
                        <p>Author: {author ?? ''}</p>
                        <p>{content ?? ''}</p>
                    </li>
                ))
            }
        </ul>
  )
}


