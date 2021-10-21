import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <Link to="./account">My Account</Link> | <Link to="./login">Logout</Link>
    </div>
  );
}
