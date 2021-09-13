import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='navbar-header'>GetGit</h1>
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink to='/' activeClassName='active' className='nav-link' exact>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' activeClassName='active' className='nav-link'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
