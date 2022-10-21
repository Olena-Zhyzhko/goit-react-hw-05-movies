import React from 'react';
import { fetchMovieCredits } from 'components/fetchMovies'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import noImg from 'images/noImages.jpg'

export default function Cast() {
    const [casts, setCasts] = useState([])
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchMoviesCast(id) {
        setLoading(true);
            try {
                const responseData = await fetchMovieCredits(id);
                setCasts(responseData.data.cast);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };
    
    useEffect(() => {
        fetchMoviesCast(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const imageURL = "https://image.tmdb.org/t/p/w500";
    

    return (
        <ul>
            {error && <p>error massage{error.massage}</p>}
            {loading && <Loader>Загружаем</Loader>}
            {casts.length > 0 &&
                casts.map(({ id, character, profile_path, name }) => (
                    <li key={id}>
                        {profile_path ? 
                            <img className="poster" src={`${imageURL}${profile_path}`} alt={name}  width='100px' /> : 
                            <img className="noImage" src={noImg} alt={name} width='100px' />
                        }
                        {/* <img src={`${imageURL}${profile_path}`} alt={name} width='100px' /> */}
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>
                ))
            }
        </ul>
    )
}