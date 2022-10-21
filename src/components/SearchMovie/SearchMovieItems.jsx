import React from 'react'
import { Link  } from "react-router-dom";
import PropTypes from 'prop-types';


export default function SearchMovieItems({ films, location }) {

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

SearchMovieItems.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({ 
        id: PropTypes.number.isRequired, 
        title: PropTypes.string.isRequired, 
        } )),
    location: PropTypes.objectOf(PropTypes.string).isRequired,
}