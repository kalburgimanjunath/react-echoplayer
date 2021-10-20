import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <Link to="./login">Login</Link> | <Link to="./signup">Signup</Link>|
      <Link to="./dashboard">Dashboard</Link>
    </div>
  );
}
