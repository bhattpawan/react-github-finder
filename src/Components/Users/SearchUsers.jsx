import Button from '../Layout/Button';
import { useState } from 'react';

const SearchUsers = ({ findUsers }) => {
  const [user, setUser] = useState(() => {
    return '';
  });

  const populateUser = (e) => {
    setUser(e.target.value);
  };

  const searchUsers = (e) => {
    e.preventDefault();
    findUsers(user);
    setUser('');
  };

  return (
    <section className='search-users' onSubmit={searchUsers}>
      <form>
        <input type='text' value={user} className='form-control' placeholder='Search Users...' onChange={populateUser} />
        <Button type='submit' title='Search' />
      </form>
    </section>
  );
};

export default SearchUsers;
