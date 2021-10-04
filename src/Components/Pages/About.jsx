import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Link to='/'>Return To Home</Link>
      <section className='about'>
        <h1>About </h1>
        <p>This is a simple React JS app that fetches GitHub data for the user you want. It uses GitHub API to do the same.</p>
      </section>
    </>
  );
};

export default About;
