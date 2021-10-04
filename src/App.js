import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Container from './Components/Layout/Container';
import UserDetail from './Components/Users/UserDetail';
import { GithubContextProvider } from './Context/GithubContext';
import './main.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container>
          <GithubContextProvider>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/user/:username'>
              <UserDetail />
            </Route>
          </GithubContextProvider>
          <Route path='/about' exact>
            <About />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
