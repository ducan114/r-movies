import React from 'react';
// Components
import HeroImage from './HeroImage';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Grid from './Grid';
import MovieThumb from './MovieThumb';
import NotFound from './NotFound';
import Button from './Button';
// Configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const {
    homeState,
    searchState,
    loading,
    error,
    setIsLoadingMore,
    searchTerm,
    setSearchTerm
  } = useHomeFetch();

  if (error) return <h1 style={{ color: 'red' }}>{error}</h1>;

  return (
    <main>
      {!searchTerm && homeState.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${homeState.results[0].backdrop_path}`}
          title={homeState.results[0].original_title}
          text={homeState.results[0].overview}
        />
      )}

      <SearchBar setSearchTerm={setSearchTerm} />

      {searchTerm && !loading && searchState.results.length === 0 && (
        <NotFound />
      )}

      {(!searchTerm || searchState.results.length !== 0) && (
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
          {(searchTerm ? searchState : homeState).results.map(movie => (
            <MovieThumb
              key={movie.id}
              linkTo={`/movies/${movie.id}`}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              title={movie.title}
            />
          ))}
        </Grid>
      )}

      {!loading &&
        (searchTerm ? searchState : homeState).page <
          (searchTerm ? searchState : homeState).total_pages && (
          <Button text='Load More' callback={() => setIsLoadingMore(true)} />
        )}

      {loading && <Spinner />}
    </main>
  );
};

export default Home;
