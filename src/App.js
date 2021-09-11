import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Container from './Components/Layout/Container';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

import React from 'react';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;

// class App extends Component {
//   // async componentDidMount() {
//   //   this.setState({ loading: true });

//   //   const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//   //   this.setState({ users: response.data, loading: false });
//   // }

//   // Search Github users

//   searchUsers = async (user) => {
//     this.setState({ loading: true });

//     const response = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     this.setState({ users: response.data.items, loading: false });
//   };

//   // Get single user

//   getUser = async (user) => {
//     this.setState({ loading: true });

//     const response = await axios.get(`https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     this.setState({ user: response.data, loading: false });
//   };

//   clearUsers = () => {
//     this.setState({ users: [], loading: false, alert: null });
//   };

//   setAlert = (message, type) => {
//     this.setState({ alert: { message: message, type: type } });
//     setTimeout(() => {
//       this.setState({ alert: null });
//     }, 3000);
//   };

//   render() {
//     const { users, loading, user } = this.state;

//     return (
//       <Router>
//         <>
//           <Navbar title='GitHub Finder' />
//           <Switch>
//             <Route
//               exact
//               path='/'
//               render={(props) => (
//                 <main className='container'>
//                   <Alert alert={this.state.alert} />
//                   <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert} />
//                   <Users users={users} loading={loading} />
//                 </main>
//               )}
//             />
//             <Route exact path='/about'>
//               <About />
//             </Route>
//             <Route exact path='/user/:login' render={(props) => <User {...props} getUser={this.getUser} user={user} />} />
//           </Switch>
//         </>
//       </Router>
//     );
//   }
// }
// export default App;
