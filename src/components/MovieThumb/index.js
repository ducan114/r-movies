import React from 'react';
import { Link } from 'react-router-dom';
//Helpers
import { standardizedAlt } from '../../helpers';
//Styles
import { Image } from './MovieThumb.styles';

const MovieThumb = ({ image, linkTo, title }) => {
  const alt = `${standardizedAlt(title)}-thumb`;

  return (
    <>
      {linkTo ? (
        <Link to={linkTo}>
          <Image src={image} alt={alt} title={title} linkTo={linkTo} />
        </Link>
      ) : (
        <Image src={image} alt={alt} title={title} />
      )}
    </>
  );
};

export default MovieThumb;
