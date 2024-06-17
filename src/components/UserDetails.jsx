import React from 'react';
import useFetchUser from '../hooks/useFetchUser';
import './UserDetails.css';

const UserDetails = ({ userId }) => {
  const { user, loading, error, refresh } = useFetchUser(userId);

  return (
    <div className="user-details">
      {error && <p className="error">Error: {error}</p>}
      {user && (
        <div>
          <h2>User Details</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
      <button onClick={refresh}>Refresh</button>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default UserDetails;
