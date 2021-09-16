import SearchUsers from '../Users/SearchUsers';
import UserList from '../Users/UserList';

const Home = ({ findUsers, users, loading, showCurrentUser }) => {
  return (
    <main>
      <SearchUsers findUsers={findUsers} />
      <UserList users={users} loading={loading} showCurrentUser={showCurrentUser} />
    </main>
  );
};

export default Home;
