import { createContext, useState } from 'react';
import axios from 'axios';

const GithubContext = createContext({
  users: [],
  user: {},
  fetchInitialUsers: () => {},
  getUsers: (username) => {},
  getUser: (username) => {},
});

export const GithubContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.REACT_APP_GITHUB_SECRET_KEY;

  const fetchInitialUsers = async () => {
    if (users.length === 0) {
      let response = await axios.get(`https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      setUsers(response.data);
    }
  };

  const getUsers = async (username) => {
    let response = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setUsers(response.data.items);
  };

  const getUser = async (username) => {
    let response = await axios.get(`https://api.github.com/users/${username}?q=client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setUser(response.data);
  };

  const context = {
    users: users,
    user: user,
    getUsers: getUsers,
    getUser: getUser,
    fetchInitialUsers: fetchInitialUsers,
  };

  return <GithubContext.Provider value={context}>{children}</GithubContext.Provider>;
};

export default GithubContext;
