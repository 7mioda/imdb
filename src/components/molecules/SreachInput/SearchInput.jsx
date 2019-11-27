import React, { useState, useRef } from 'react';
import Input from '../../atoms/Input/Input';
import SearchIcon from '../../atoms/SearchIcon/SearchIcon';
import withStyle from './withStyle';
import SearchResultItem from '../SearchResult/SearchResultItem';
import useOnClickOutside from '../../../shared/hooks/useOnClickOutside';


const SearchInput = ({ className, suggestion = true }) => {
  const ref = useRef();
  const [showSuggestion, setShowSuggestion] = useState(false);
  useOnClickOutside(ref, () => setShowSuggestion(false));
  return (
    <div ref={ref} className={`${className}`}>
      <Input highlighted height="30px" onFocus={() => setShowSuggestion(true)} placeholder="    Search IMDb" Suffix={(<SearchIcon />)} />
      {suggestion && showSuggestion && (
        <div className="search__suggestion">
          <SearchResultItem data={{ title: 'title', release_date: 'releaseDate', backdrop_path: 'https://m.media-amazon.com/images/M/MV5BYzljYzY1ZjItYzNkMC00Mjc2LWFiOGYtMmFkNGViOTE1ZmMwXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_UY74_CR12,0,50,74_.jpg' }} />
          <SearchResultItem data={{ title: 'title', release_date: 'releaseDate', backdrop_path: 'https://m.media-amazon.com/images/M/MV5BYzljYzY1ZjItYzNkMC00Mjc2LWFiOGYtMmFkNGViOTE1ZmMwXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_UY74_CR12,0,50,74_.jpg' }} />
          <SearchResultItem data={{ title: 'title', release_date: 'releaseDate', backdrop_path: 'https://m.media-amazon.com/images/M/MV5BYzljYzY1ZjItYzNkMC00Mjc2LWFiOGYtMmFkNGViOTE1ZmMwXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_UY74_CR12,0,50,74_.jpg' }} />

        </div>
      )}
    </div>
  );
};


export default withStyle(SearchInput);
