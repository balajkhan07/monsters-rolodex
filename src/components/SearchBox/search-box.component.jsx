import React from 'react'
import './search-box.styles.scss'

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            className='search-box' 
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default SearchBox