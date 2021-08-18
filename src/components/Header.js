import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="container header">
      <h1 className="brand-name">Math Magicians</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/calculator" className="nav-link">Calculator</Link>
        <Link to="/quote" className="nav-link">Quote</Link>
      </nav>
    </div>
  );
}

export default Header;
