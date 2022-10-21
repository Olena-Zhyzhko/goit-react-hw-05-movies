import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

 
export default function SearchForm({ onSubmit}) {
    const [searchMovie, setSearchMovie] = useState('');

    const handleChange = (e) => {
        setSearchMovie(e.currentTarget.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchMovie.trim() === '') {
            return toast("Enter search word, please.");
        }

        onSubmit(searchMovie);
        setSearchMovie('');
    }

    return (
        <div>
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    name='searchMovie'
                    value={searchMovie}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}