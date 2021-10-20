import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="./dashboard">
        <input type="text" placeholder="username/email" />
        <input type="password" />
        <button type="submit">Login</button>
      </form>
      <Link to="signup">Signup</Link>
    </div>
  );
}
