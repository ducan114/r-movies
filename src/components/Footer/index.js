import React from 'react';
// Images
import TMDBLogo from '../../images/tmdb_logo.svg';
import CodingAddictLogo from '../../images/coding-addict-logo.svg';
// Styles
import { Content, InspiredBy, PoweredBy, Wrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <InspiredBy>
          <h1>Inspired by</h1>
          <a href='https://www.johnsmilga.com' target='_blank' rel='noreferrer'>
            <img src={CodingAddictLogo} alt='coding-addict-logo' />
          </a>
        </InspiredBy>
        <PoweredBy>
          <a href='https://www.themoviedb.org' target='_blank' rel='noreferrer'>
            <img src={TMDBLogo} alt='tmdb-logo' />
          </a>
        </PoweredBy>
      </Content>
    </Wrapper>
  );
};

export default Footer;
