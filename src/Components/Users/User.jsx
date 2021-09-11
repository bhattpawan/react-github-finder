import React from 'react';

const User = ({ user, showUser }) => {
  return (
    <div className='card'>
      <img src={user.avatar_url} className='card-img-top' alt='Profile' />
      <div className='card-body text-center'>
        <h4>{user.login}</h4>
        <button className='btn btn-primary btn-sm mt-3' onClick={showUser}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default User;
