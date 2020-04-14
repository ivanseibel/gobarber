import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Full name" />
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Yout secret password" />

        <button type="submit">Register</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
