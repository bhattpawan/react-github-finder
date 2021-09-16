import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './main.scss';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Container from './Components/Layout/Container';
import UserDetail from './Components/Users/UserDetail';

const App = () => {
  const [users, setUsers] = useState(() => {
    return [];
  });

  const [user, setUser] = useState(() => {
    return {};
  });

  const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.REACT_APP_GITHUB_SECRET_KEY;

  useEffect(() => {
    const fetchInitialusers = async () => {
      let response = await axios.get(`https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      setUsers(response.data);
    };
    fetchInitialusers();
  }, []);

  const findUsers = async (user) => {
    let response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setUsers(response.data.items);
  };

  // Get Single User

  const showCurrentUser = async (username) => {
    let response = await axios.get(`https://api.github.com/users/${username}?q=client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setUser(response.data);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Container>
            <Route path='/' exact>
              <Home findUsers={findUsers} users={users} />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/user/:username'>
              <UserDetail user={user} showCurrentUser={showCurrentUser} />
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
};

export default App;
