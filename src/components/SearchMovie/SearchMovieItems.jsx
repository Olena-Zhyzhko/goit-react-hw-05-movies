import React from 'react'
import { Link, useLocation  } from "react-router-dom";


export default function SearchMovieItems({ films }) {
          const location = useLocation();

  return (
    <>
            {films.map(({ id, title }) => (
                <li key={id} className="ImageGalleryItem">
                    <Link to={`${id}`} state={{ from: location }}>{title}</Link >
                </li>
            ))}
        </>
  )
}
