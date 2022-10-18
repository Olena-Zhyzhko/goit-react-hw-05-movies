import React from 'react'
import { Link, Outlet } from "react-router-dom";
// import { useParams } from 'react-router-dom';



export default function AdditionalInfo({ id }) {
    // const { movieId } = useParams();
    // // console.log(movieId);

  return (
      <div>
            <p>Additional information</p>
            <ul>
              <li>
                  <Link to={'cast'} id={id}>Cast</Link >
              </li>
              <li>
                  <Link to={'reviews'} id={id}>Reviews</Link >
              </li>
          </ul>
        <Outlet />

      </div>
  )
}

