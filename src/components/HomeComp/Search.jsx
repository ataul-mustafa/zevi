import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SuggestionBox from './SuggestionBox';
import './Search.scss';


const Search = () => {
    const [toggleSug, setToggleSug] = useState(false);
    return (
        <div className='mainCo'>
            <div className="searchBo">
                <input type="text" onClick={()=>{setToggleSug(true)}} className='searchBar' placeholder='Search' />
                <SearchIcon className='searchIcon' />
            </div>
            <div className="suggestionBo" style={{display: toggleSug ? 'block' : 'none', transition: '0.5s ease'}}>
                <SuggestionBox />
            </div>
        </ div>
    );
};

export default Search;