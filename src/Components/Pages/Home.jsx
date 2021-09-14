import { useState, useEffect } from 'react';
import SearchUsers from '../Users/SearchUsers';
import UserList from '../Users/UserList';
import axios from 'axios';

const Home = () => {
  const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.REACT_APP_GITHUB_SECRET_KEY;

  const [users, setUsers] = useState(() => {
    return [];
  });
  const [loading, setLoading] = useState(false);

  const findUsers = async (user) => {
    setLoading(true);
    let response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setUsers((users) => response.data.items);
    setLoading(false);
  };

  return (
    <main>
      <SearchUsers findUsers={findUsers} />
      <UserList users={users} loading={loading} />
    </main>
  );
};

export default Home;
