import React from 'react';
import { Link } from 'react-router-dom';
//Images
import RMDB from '../../images/react-movie-logo.svg';
import TMDB from '../../images/tmdb_logo.svg';
//Styles
import { Wrapper, Content, RMDBLogo, TMDBLogo } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <RMDBLogo src={RMDB} alt='react-movie-logo' />
      </Link>
      <TMDBLogo src={TMDB} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;
