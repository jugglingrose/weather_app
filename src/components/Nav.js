import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="Nav">
    <Link to="/">Now</Link>
    <a href="/week">10 Day</a>
  </div>
);

export default Nav;