import React from 'react'
import noImg from 'images/noImages.jpg'

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
            <div class="modal-movie-cont__img">
                {poster_path ? 
                    <img class="poster" src={`${imageURL}${poster_path}`} alt={title}  /> : 
                    <img class="noImage" src={noImg} alt={title} />
                }
            </div>
      {/* <div class="modal-movie-cont__data"> */}
            <div class="modal-movie-cont__about">
                  <h2 class="modal-movie__title">{title ?? ''} {release_date ? `(${release_date.slice(0, 4)})` : ''}</h2>
                  <p>User score: {vote_average.toFixed(1) ?? ''}</p>
                  <h3 class="modal-movie-about">Overview</h3>
                  <p class="modal-movie-descr-movie">{overview ?? ''}</p>
                  <h3 class="modal-movie-about">Genres</h3>
                  <p class="modal-movie-table__item-value">{genreName ?? ''}</p>
            </div>
          {/* </div> */}      </div>
  )
}
