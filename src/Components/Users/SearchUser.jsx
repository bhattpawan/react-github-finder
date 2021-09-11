import React from 'react';

const SearchUser = ({ searchUsers }) => {
  const getUser = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      searchUsers(e.target.value);
    }
  };

  return (
    <form className='my-4'>
      <input type='text' className='form-control' id='user' name='user' placeholder='Search User...' onChange={getUser} />
    </form>
  );
};

export default SearchUser;
