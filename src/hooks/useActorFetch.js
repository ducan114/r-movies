import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

export const useActorFetch = actorId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setLoading(true);
        setError(false);

        const actor = await API.fetchActor(actorId);

        setState({
          ...actor
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const sesstionState = isPersistedState(`actor-${actorId}`);
    if (sesstionState) {
      setState(sesstionState);
      setLoading(false);
      return;
    }

    fetchActor();
  }, [actorId]);

  //Write to sessionState
  useEffect(() => {
    if (loading || error) return;
    sessionStorage.setItem(`actor-${actorId}`, JSON.stringify(state));
  }, [actorId, state, loading, error]);

  return { state, loading, error };
};
