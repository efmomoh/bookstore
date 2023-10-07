import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './Styles/Navbar.css';

const Navbar = () => (
  <header className="header">
    <div className="navbar">
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li className="active">
            <Link to="categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
    <UserProfile />

  </header>
);

export default Navbar;
