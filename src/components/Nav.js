import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="Nav">
    <Link className="navButton" to="/">Now</Link>
    <a className="navButton" href="/week">10 Day</a>
  </div>
);

export default Nav;