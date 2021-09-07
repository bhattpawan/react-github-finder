import React, { Component, Fragment } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: response.data, loading: false });
  }

  render() {
    return (
      <Fragment>
        <Navbar title='GitHub Finder' />
        <main className='container'>
          <Users users={this.state.users} loading={this.state.loading} />
        </main>
      </Fragment>
    );
  }
}

export default App;
