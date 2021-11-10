import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Account from '../Account';
// Images
import RMDB from '../../images/react-movie-logo.svg';
// Styles
import { Wrapper, Content, RMDBLogo } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <RMDBLogo src={RMDB} alt='react-movie-logo' />
        </Link>
        <Account />
      </Content>
    </Wrapper>
  );
};

export default Header;
