import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h3>Github Manager</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
