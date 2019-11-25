import React from 'react';
import Input from '../../atoms/Input/Input';
import SearchIcon from '../../atoms/SearchIcon/SearchIcon';


const SearchInput = () => (
  <Input highlited height="30px" placeholder="Search IMDb" Suffix={(<SearchIcon />)} />
);


export default SearchInput;
