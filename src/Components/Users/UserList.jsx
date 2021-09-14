import User from './User';

const UserList = ({ users, loading }) => {
  return (
    <section className='user-list'>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
