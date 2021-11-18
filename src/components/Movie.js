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
import ErrorMessage from './ErrorMessage';
// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
// Images
import NoImage from '../images/no_image.jpg';
import CommentList from './CommentList/CommentList';

const Movie = () => {
  const { movieId } = useParams();
  const {
    state: movie,
    loading,
    error,
    comments,
    loadingComments,
    setComments
  } = useMovieFetch(movieId);

  return (
    <main>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
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
                key={actor._id}
                actorId={actor._id}
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
          <CommentList
            comments={comments}
            loading={loadingComments}
            movieId={movieId}
            setComments={setComments}
          />
        </>
      )}
    </main>
  );
};

export default Movie;
