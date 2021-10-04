import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404 Not Found</h1>
      <Link to='/'>Return To Home</Link>
    </div>
  );
};

export default NotFound;
