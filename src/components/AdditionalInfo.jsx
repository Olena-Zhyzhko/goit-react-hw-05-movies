import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
// import { useParams } from 'react-router-dom';



export default function AdditionalInfo({ id }) {
      const location = useLocation();

    // const { movieId } = useParams();
    // // console.log(movieId);

  return (
      <div>
            <p>Additional information</p>
            <ul>
              <li>
                  <Link to={'cast'} id={id} state={{ from: location.state?.from }}
>Cast</Link >
              </li>
              <li>
                  <Link to={'reviews'} id={id} state={{ from: location.state?.from }}
>Reviews</Link >
              </li>
          </ul>
        <Outlet />

      </div>
  )
}

