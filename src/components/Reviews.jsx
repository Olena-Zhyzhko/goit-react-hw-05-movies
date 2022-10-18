import React from 'react';
import { fetchMovieReviews } from 'components/FetchMovies'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();
    // console.log(movieId);


    async function fetchMoviesReviews(id) {
            try {
                const responseData = await fetchMovieReviews(id);
                setReviews(responseData.data.results);
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
        // if (cast === []) {
        //     return;
        // }
        
        fetchMoviesReviews(movieId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

     if (!reviews) {
        return null;
    }
    console.log(reviews);
// const imageURL = "https://image.tmdb.org/t/p/w500";


    return (
        <ul>
            {reviews.map(({ id, author, content }) => (
                <li key={id} className="ImageGalleryItem">
                    <p>Author: {author ?? ''}</p>
                    <p>{content ?? ''}</p>
                </li>
            ))}
        </ul>
    //   <div>
    //       <p>hello</p>
    //   </div>
  )
}


// https://api.themoviedb.org/3/movie/undefined/credits?api_key=31ede725e11c94cc06cfdf663642b455&language=en-US
// https://api.themoviedb.org/3/movie/616820/credits?api_key=31ede725e11c94cc06cfdf663642b455&language=en-US