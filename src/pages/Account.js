import React from 'react';
import { Link } from 'react-router-dom';
export default function Account() {
  return (
    <div className="account">
      <h1>My Account</h1>
      <h3>Logged in as : Manjunath Kalburgi</h3>
      <Avatar />
    </div>
  );
}
