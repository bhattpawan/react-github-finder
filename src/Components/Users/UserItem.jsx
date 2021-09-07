import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img src={avatar_url} className='round-img' style={{ width: '60px' }} alt='' />
      <h3>{login}</h3>
      <a href={html_url} className='btn' target='_blank'>
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
