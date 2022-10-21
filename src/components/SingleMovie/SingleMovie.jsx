import React from 'react'
import noImg from 'images/noImages.jpg'
import PropTypes from 'prop-types';


export default function SingleMovie({ movie }) {
const imageURL = "https://image.tmdb.org/t/p/w500";

const {
    title,
    release_date,
      genres,
      overview,
      poster_path,
      vote_average,
    } = movie;


    const genreName = genres.map(ganre => ganre.name).join(', ');

  return (
      <div>
            <div className="modal-movie-cont__img">
                {poster_path ? 
                    <img className="poster" src={`${imageURL}${poster_path}`} alt={title}  /> : 
                    <img className="noImage" src={noImg} alt={title} />
                }
            </div>
            <div className="modal-movie-cont__about">
                  <h2 className="modal-movie__title">{title ?? ''} {release_date ? `(${release_date.slice(0, 4)})` : ''}</h2>
                  <p>User score: {vote_average.toFixed(1) ?? ''}</p>
                  <h3 className="modal-movie-about">Overview</h3>
                  <p className="modal-movie-descr-movie">{overview ?? ''}</p>
                  <h3 className="modal-movie-about">Genres</h3>
                  <p className="modal-movie-table__item-value">{genreName ?? ''}</p>
            </div>
       </div>
  )
}

SingleMovie.propTypes = {
  movie: PropTypes.shape ({ 
      title: PropTypes.string.isRequired, 
      release_date: PropTypes.string, 
    genres: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string, 
  })
        ),
      overview: PropTypes.string, 
      poster_path: PropTypes.string, 
      vote_average: PropTypes.number, 
        } ),
}