import User from './User';

const UserList = ({ users }) => {
  return (
    <section className='user-list'>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
