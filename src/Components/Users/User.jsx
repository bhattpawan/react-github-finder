import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <article className='user-card'>
      <img src={user.avatar_url} alt='User Profile' className='user-img' />
      <p className='user-name'>{user.login}</p>
      <Link to={`/user/${user.login}`} className='btn'>
        More
      </Link>
    </article>
  );
};

export default User;
