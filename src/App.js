import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Container from './Components/Layout/Container';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Container>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
};

export default App;
