import React, { useState } from 'react';
import { get } from 'lodash';
import SearchInput from '../../molecules/SreachInput/SearchInput';
import useFetcher from '../../../shared/hooks/useFetcher';


const SearchNSuggestion = () => {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useFetcher({ url: '/search/multi', queryString: { query } });
  const suggestions = get(data, 'results', []);
  return (
    <SearchInput
      value={query}
      onChange={({ target: { value } }) => setQuery(value)}
      suggestions={suggestions}
    />
  );
};

export default SearchNSuggestion;
