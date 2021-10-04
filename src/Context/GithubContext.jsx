import { createContext, useState } from 'react';
import axios from 'axios';

const GithubContext = createContext({
  users: [],
  user: {},
  fetchInitialUsers: () => {},
  getUsers: (username) => {},
  getUser: (username) => {},
});

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET_KEY;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET_KEY;
}

export const GithubContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

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
