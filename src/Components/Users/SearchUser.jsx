import { useState } from 'react';

const SearchUser = ({ searchUsers }) => {
  const [user, setUser] = useState('');

  const getUser = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      setUser(e.target.value);
    }
  };

  const searchUser = () => {
    if (user !== '') {
      searchUsers(user);
    }
  };

  return (
    <form className='form-row my-3' onSubmit={searchUser}>
      <div className='form-col'>
        <input type='text' className='form-control' id='user' name='user' placeholder='Search User...' onChange={getUser} />
      </div>

      <div className='form-col'>
        <button type='submit' className='btn btn-outline-dark'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchUser;
