import React, { useState, useRef } from 'react';
import Input from '../../atoms/Input/Input';
import SearchIcon from '../../atoms/SearchIcon/SearchIcon';
import withStyle from './withStyle';
import SearchResultItem from '../SearchResult/SearchResultItem';
import useOnClickOutside from '../../../shared/hooks/useOnClickOutside';


const SearchInput = ({ className, suggestions, ...rest }) => {
  const ref = useRef();
  const [showSuggestion, setShowSuggestion] = useState(false);
  useOnClickOutside(ref, () => setShowSuggestion(false));
  return (
    <div ref={ref} className={`${className}`}>
      <Input
        highlighted
        height="30px"
        onFocus={() => setShowSuggestion(true)}
        placeholder="Search IMDb"
        Suffix={(<SearchIcon />)}
        {...rest}
      />
      {suggestions && showSuggestion && (
        <div className="search__suggestion">
          {suggestions.slice(0, 10).map((suggestion) => (
            <SearchResultItem data={suggestion} />
          ))}
        </div>
      )}
    </div>
  );
};


export default withStyle(SearchInput);
