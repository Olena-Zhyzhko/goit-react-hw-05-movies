import React from 'react'

export default function SingleMovie({ movie }) {
const imageURL = "https://image.tmdb.org/t/p/w500";
    const noImg ='https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg';

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
                    <img class="poster" src={`${imageURL}${poster_path}`} alt="{title}"  /> : 
                    <img class="poster" src={noImg} alt="{title}" />
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
