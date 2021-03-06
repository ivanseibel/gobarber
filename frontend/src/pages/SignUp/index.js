import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  const schema = Yup.object().shape({
    name: Yup.string('Name must be a string').required('Name is required'),
    email: Yup.string('Email must be a string')
      .email('Must be a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must have 6 characters at least')
      .required('Password is required'),
  });

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your email" />
        <Input
          name="password"
          type="password"
          placeholder="Yout secret password"
        />

        <button type="submit">Register</button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}
