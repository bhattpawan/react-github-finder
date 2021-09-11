import React from 'react';
import User from './User';
import Loading from '../Layout/Loading';

const Users = ({ users, loading, showUser }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className='users'>
      {users.map((user) => {
        return <User key={user.id} user={user} showUser={showUser} />;
      })}
    </div>
  );
};

export default Users;
