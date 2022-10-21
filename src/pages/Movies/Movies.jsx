import React from 'react'
import { useState } from 'react'
import SearchForm from 'components/SearchMovie/SearchForm';
import SearchMovie from 'components/SearchMovie/SearchMovie';


export default function Movies() {
 const [searchMovie, setSearchMovie] = useState('');

  const handleFormSubmit = (searchMovie) => {
    setSearchMovie(searchMovie);
  }

  return (
      <div>
          <SearchForm onSubmit={handleFormSubmit} />
          <SearchMovie searchMovie={searchMovie} />
      </div>
  )
}
