import React, { useState, useEffect, useRef } from 'react';
//Styles
import { Wrapper, Content } from './SearchBar.styles';
//Images
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search Movie'
          value={state}
          onChange={e => setState(e.target.value)}
        />
        <i className='fa fa-times' onClick={() => setState('')}></i>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
