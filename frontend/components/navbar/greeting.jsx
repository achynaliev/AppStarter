import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <Link to="/login">Login</Link>
);

const personalGreeting = (currentUser, logout) => (
    <a className="nav-logout" onClick={logout}>Log out</a>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
