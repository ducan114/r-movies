import React from 'react';
//Components
import HeroImage from './HeroImage';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Grid from './Grid';
import Thumb from './Thumb';
import Button from './Button';
//Configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, setIsLoadingMore, searchTerm, setSearchTerm } =
    useHomeFetch();

  if (error) return <h1 style={{ color: 'red' }}>Something went wrong...</h1>;

  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
      {loading && <Spinner />}
    </>
  );
};

export default Home;
