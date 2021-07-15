import { useState, useEffect } from 'react';
//API
import API from '../API';
//Helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        //Get directors only
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const sesstionState = isPersistedState(movieId);
    if (sesstionState) {
      setState(sesstionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);
  //Write to sessionState
  useEffect(() => {
    if (loading || error) return;
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state, loading, error]);

  return { state, loading, error };
};
