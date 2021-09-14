import Button from '../Layout/Button';

const User = ({ user }) => {
  return (
    <article className='user-card'>
      <img src={user.avatar_url} alt='User Profile' className='user-img' />
      <p className='user-name'>{user.login}</p>
      <Button title='More' />
    </article>
  );
};

export default User;
