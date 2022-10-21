import React from 'react'
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


export default function HomePagesItems({ films }) {
        const location = useLocation();

  return (
      <>
            {films.map(({ id, title }) => (
                <li key={id} className="ImageGalleryItem">
                    <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link >
                </li>
            ))}
        </>  )
}

HomePagesItems.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({ 
        id: PropTypes.number.isRequired, 
        title: PropTypes.string.isRequired, 
        } )),
}