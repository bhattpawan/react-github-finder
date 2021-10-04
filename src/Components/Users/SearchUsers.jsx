import Button from '../Layout/Button';
import { useState } from 'react';
import { useContext } from 'react';
import GithubContext from '../../Context/GithubContext';

const SearchUsers = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [userVal, setUserVal] = useState('');
  const GithubCont = useContext(GithubContext);

  const populateUser = (e) => {
    setUserVal(e.target.value);
  };

  const searchUsers = (e) => {
    e.preventDefault();

    if (userVal.trim() !== '') {
      GithubCont.getUsers(userVal);
      setIsEmpty(false);
      setUserVal('');
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <section className='search-users' onSubmit={searchUsers}>
      <form>
        <input type='text' value={userVal} className='form-control' placeholder='Search Users...' onChange={populateUser} />
        <Button type='submit' title='Search' />
        {isEmpty ? <small>Please Enter a Username</small> : ''}
      </form>
    </section>
  );
};

export default SearchUsers;
