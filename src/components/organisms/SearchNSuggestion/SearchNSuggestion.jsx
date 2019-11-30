import React, { useState } from 'react';
import { get } from 'lodash';
import SearchInput from '../../molecules/SreachInput/SearchInput';
import useFetcher from '../../../shared/hooks/useFetcher';
import { Menu, MenuItem } from '../Menu';
import searchTopics from '../../../shared/mock/searchTopics';
import withStyle from './withStyle';


const SearchNSuggestion = ({ className }) => {
  const [query, setQuery] = useState('');
  const [searchTopic, setSearchTopic] = useState(searchTopics[0]);
  const { data, loading, error } = useFetcher({ url: `/search/${searchTopic.value}`, queryString: { query } });
  const suggestions = get(data, 'results', []);
  return (
    <SearchInput
      value={query}
      onChange={({ target: { value } }) => setQuery(value)}
      suggestions={suggestions}
      topic={searchTopic.value}
      Prefix={(
        <Menu className={`${className}`}>
          <MenuItem title={searchTopic.title}>
            <ul>
              {searchTopics
                .filter(({ title }) => title !== searchTopic.title )
                .map((topic) => (
                  <li onClick={() => setSearchTopic(topic)}>
                    <span>
                      <img src={topic.icon} alt="" />
                      <h4>{topic.title}</h4>
                    </span>
                  </li>
                ))}
            </ul>
          </MenuItem>
        </Menu>
      )}
    />
  );
};

export default withStyle(SearchNSuggestion);
