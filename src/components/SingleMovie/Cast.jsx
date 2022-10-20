import React from 'react';
import { fetchMovieCredits } from 'components/fetchMovies'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export default function Cast() {
    const [casts, setCasts] = useState([])
        const { movieId } = useParams();

    async function fetchMoviesCast(id) {
            try {
                const responseData = await fetchMovieCredits(id);
                setCasts(responseData.data.cast);
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
        
        fetchMoviesCast(movieId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

     if (!casts) {
        return null;
    }
    console.log(casts);
const imageURL = "https://image.tmdb.org/t/p/w500";


    return (
        <ul>
            {casts.map(({ id, character, profile_path, name }) => (
                <li key={id} className="ImageGalleryItem">
                    <img src={`${imageURL}${profile_path}`} alt={name} width='100px'/>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    //   <div>
    //       <img></img>
    //       <p></p>
    //       <p></p>
    //   </div>
  )
}


// https://api.themoviedb.org/3/movie/undefined/credits?api_key=31ede725e11c94cc06cfdf663642b455&language=en-US
// https://api.themoviedb.org/3/movie/616820/credits?api_key=31ede725e11c94cc06cfdf663642b455&language=en-US