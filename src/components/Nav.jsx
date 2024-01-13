/* Nav.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import navStyles from './Nav.module.css';

const Navbar = () => {
  return (
    <div className={navStyles.nav}>
      <Link to='/' className={navStyles.link1}>Kalvium Books📖</Link>
      <Link to='/register' className={navStyles.link}>Register</Link>
    </div>
  );
};

export default Navbar;
