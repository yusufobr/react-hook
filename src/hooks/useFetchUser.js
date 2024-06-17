import { useState, useEffect, useCallback } from 'react';

const LOCAL_STORAGE_KEY = 'userCache';

const saveUserToCache = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

const useFetchUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async (id) => {
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      saveUserToCache(data);
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cachedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
    } else {
      fetchUser(userId);
    }
    // Cleanup function to handle component unmount
    return () => {
      setUser(null);
      setLoading(false);
      setError(null);
    };
  }, [userId, fetchUser]);

  const refresh = useCallback(() => {
    fetchUser(userId);
  }, [userId, fetchUser]);

  return { user, loading, error, refresh };
};

export default useFetchUser;
