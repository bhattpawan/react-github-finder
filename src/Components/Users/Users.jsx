import UserItem from './UserItem';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className='users'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
