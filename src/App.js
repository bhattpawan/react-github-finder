import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Container from './Components/Layout/Container';
import UserDetail from './Components/Users/UserDetail';
import { GithubContextProvider } from './Context/GithubContext';
import './main.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <GithubContextProvider>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:username' component={UserDetail} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </GithubContextProvider>
    </>
  );
};

export default App;
