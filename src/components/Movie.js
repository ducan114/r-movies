import React from 'react';
import { useParams } from 'react-router';
//API
import API from '../API';

const Movie = () => {
  const { movieId } = useParams();
  return <div>{movieId}</div>;
};

export default Movie;
