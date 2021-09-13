import Button from '../Layout/Button';

const User = () => {
  return (
    <article className='user-card'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png' alt='User Profile' className='user-img' />
      <p className='user-name'>User Name</p>
      <Button title='More' />
    </article>
  );
};

export default User;
