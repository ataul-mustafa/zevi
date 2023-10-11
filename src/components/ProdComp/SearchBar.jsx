import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Search.scss'

const Search = () => {
    return (
        <>
            <div className="searchBox">
                <input type="text" className='searchBar' placeholder='Search' />
                <SearchIcon className='searchIcon' />
            </div>
        </>
    );
};

export default Search;