import React, { useState, useEffect, useRef } from 'react';
// Component
import GenreFilter from '../GenreFilter';
// Styles
import { Wrapper, Content, SearchBox } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm, genres, setGenres, availableGenres }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);
  const input = useRef();

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => setSearchTerm(state.trim()), 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <SearchBox>
          <span
            className='material-icons'
            onClick={() => input.current.focus()}
          >
            search
          </span>
          <input
            type='text'
            placeholder='Search Movies'
            value={state}
            ref={input}
            onChange={e => setState(e.target.value)}
          />
          <span
            className='material-icons'
            onClick={() => {
              setState('');
              input.current.focus();
            }}
          >
            clear
          </span>
        </SearchBox>
        <GenreFilter
          genres={genres}
          setGenres={setGenres}
          availableGenres={availableGenres}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
