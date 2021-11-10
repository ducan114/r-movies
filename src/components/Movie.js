import React from 'react';
import { useParams } from 'react-router';
// Configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import ActorThumb from './ActorThumb';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Spinner from './Spinner';
// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
// Images
import NoImage from '../images/no_image.jpg';
import CommentList from './CommentList/CommentList';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;

  if (error) return <h1 style={{ color: 'red' }}>Something went wrong...</h1>;

  return (
    <>
      <BreadCrumb name={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header='Actors'>
        {movie.actors.map(actor => (
          <ActorThumb
            key={actor.id}
            actorId={actor.id}
            name={actor.name}
            image={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
            character={actor.character}
          />
        ))}
      </Grid>
      <CommentList />
    </>
  );
};

export default Movie;
