import React from 'react';
//Components
import MovieThumb from '../MovieThumb';
//Configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//Images
import NoImage from '../../images/no_image.jpg';
//Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <div>
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          title={movie.title}
        />
      </div>
      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{movie.vote_average}</div>
          </div>
          <div className='directors'>
            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map((director, index) => (
              <p key={index}>{director}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
