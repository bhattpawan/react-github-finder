import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
      <ul className='nav-list'></ul>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: 'GitHub Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
