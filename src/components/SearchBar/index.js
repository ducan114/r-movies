import React, { useState, useEffect, useRef } from 'react';
//Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
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
        <span className='material-icons' onClick={() => input.current.focus()}>
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
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
