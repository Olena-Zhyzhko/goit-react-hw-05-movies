import React from 'react';
import { useState, useEffect } from 'react';
import { fetchOneMovie } from 'components/FetchMovies';
import { useParams, useLocation, Link } from 'react-router-dom';
import SingleMovie from 'components/SingleMovie'
import AdditionalInfo from 'components/AdditionalInfo'




export default function MovieIdDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    // console.log(filmId);
    const [movie, setMovie] = useState(
        // () => {
        //     return JSON.parse(window.localStorage.getItem('singleMovie')) ??
                null
    );

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

    // useEffect(() => {
    //     localStorage.setItem('popularMovie', JSON.stringify(movie));
    // }, [movie])



    //     useEffect(() => {
    //     localStorage.setItem('popularMovie', JSON.stringify(movies));
    // }, [movies])

    if (!movie) {
        return null;
    }

    

  return (
      <div>
          {/* <Link to={location.state.from}>Go back</Link>; */}
          <SingleMovie movie={movie} />
          <AdditionalInfo id={movieId} />
      </div>
  )
}

// const ProductDetails = () => {
//   const location = useLocation();
//   console.log(location.state);

//   // /products -> products/h-1
//   // { from: { pathname: "/products", search: "" } }

//   // /products?name=hoodie -> products/h-1
//   // { from: { pathname: "/products", search: "?name=hoodie" } }

//   return <Link to={location.state.from}>Back to products</Link>;
// };