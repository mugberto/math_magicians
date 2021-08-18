import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Math Magicians</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/calculator'>Calculator</Link>
        <Link to='/quote'>Quote</Link>
      </nav>
    </div>
  );
}