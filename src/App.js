import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <main>
          <p>Content</p>
        </main>
      </>
    </Router>
  );
}

export default App;
