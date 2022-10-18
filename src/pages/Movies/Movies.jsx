import React from 'react'
import { useState } from 'react'
// import { toast } from 'react-toastify';
import SearchForm from 'components/SearchForm';
import SearchMovie from 'components/SearchMovie';


export default function Movies() {
 const [searchMovie, setSearchMovie] = useState('');

  const hangleFormSubmit = (searchMovie) => {
    setSearchMovie(searchMovie);
  }

  return (
      <div>
          <SearchForm onSubmit={hangleFormSubmit} />
          <SearchMovie searchMovie={searchMovie} />
      </div>
  )
}
