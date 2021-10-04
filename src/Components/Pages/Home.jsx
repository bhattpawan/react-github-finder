import SearchUsers from '../Users/SearchUsers';
import UserList from '../Users/UserList';
import { useEffect, useContext } from 'react';
import GithubContext from '../../Context/GithubContext';

const Home = () => {
  const GithubCont = useContext(GithubContext);

  useEffect(() => {
    GithubCont.fetchInitialUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <SearchUsers />
      <UserList />
    </main>
  );
};

export default Home;
