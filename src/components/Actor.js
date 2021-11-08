import React from 'react';
import { useParams } from 'react-router';
// Configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import ActorThumb from './ActorThumb';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import MovieThumb from './MovieThumb';
import Spinner from './Spinner';
// Hooks
import { useActorFetch } from '../hooks/useActorFetch';
// Images
import NoImage from '../images/no_image.jpg';

const Actor = () => {
  const { actorId } = useParams();

  const { state: actor, loading, error } = useActorFetch(actorId);

  if (loading) return <Spinner />;

  return (
    <>
      <BreadCrumb name={actor.name} />
      <Grid header='Movies'>
        {actor.movies.map(movie => (
          <MovieThumb
            key={movie.id}
            linkTo={`/movies/${movie.id}`}
            title={movie.title}
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Actor;
