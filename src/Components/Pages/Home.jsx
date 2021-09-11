import { useState } from 'react';
import Users from '../Users/Users';
import axios from 'axios';
import SearchUser from '../Users/SearchUser';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const setData = async () => {
  //     setLoading(true);
  //     const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //     setUsers(response.data);
  //     setLoading(false);
  //   };
  //   setData();
  // }, []);

  const searchUsers = (user) => {
    const setData = async () => {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUsers(response.data.items);
      setLoading(false);
    };
    setData();
  };

  return (
    <>
      <SearchUser searchUsers={searchUsers} />
      <Users users={users} loading={loading} />
    </>
  );
};

export default Home;
