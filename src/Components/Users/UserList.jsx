import User from './User';
import { useContext } from 'react';
import GithubContext from '../../Context/GithubContext';

const UserList = () => {
  const GithubCont = useContext(GithubContext);

  const users = GithubCont.users;

  // if (users.length === 0) {
  //   return <section className='no-show'>Nothing to show</section>;
  // }

  return (
    <section className='user-list'>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
