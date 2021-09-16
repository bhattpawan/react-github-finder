import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const UserDetail = ({ user, showCurrentUser }) => {
  let { username } = useParams();
  useEffect(() => {
    showCurrentUser(username);
  }, []);

  const { name, avatar_url, location, bio, blog, company, html_url, followers, following, public_repos, public_gists } = user;

  return (
    <>
      <Link to='/'>Back To Search</Link>
      <section className='current-user'>
        <div className='user-details'>
          <img src={avatar_url} alt='' />
          <h1>{name}</h1>
          <p>{location}</p>
          <p>
            {bio && (
              <span>
                <strong>Bio:</strong> {bio}
              </span>
            )}
          </p>
          <a href={html_url} target='_blank'>
            View GitHub
          </a>
          <ul>
            <li>
              {blog && (
                <span>
                  <strong>Blog: </strong>
                  {blog}
                </span>
              )}
            </li>
            <li>
              {company && (
                <span>
                  <strong>Company: </strong>
                  {company}
                </span>
              )}
            </li>
          </ul>
          <div className='followers-container'>
            <div className='badge'>Followers: {followers}</div>
            <div className='badge'>Following: {following}</div>
            <div className='badge'>Public Repos: {public_repos}</div>
            <div className='badge'>Public Gists: {public_gists}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetail;
