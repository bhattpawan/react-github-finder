import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const UserDetail = ({ user, showCurrentUser }) => {
  let { username } = useParams();
  useEffect(() => {
    showCurrentUser(username);
  }, []);

  const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;

  return (
    <>
      <Link to='/'>Back To Search</Link>
      <section className='current-user'>
        Hireable: {hireable ? <span className='hireable success'>&#10003;</span> : <span className='hireable danger'>&times;</span>}
        <div className='user-details'>
          <img src={avatar_url} alt='' />
        </div>
      </section>
    </>
  );
};

export default UserDetail;
