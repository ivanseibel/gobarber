import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  const schema = Yup.object().shape({
    email: Yup.string('Email must be a string')
      .email('Must be a valid email')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your email" />
        <Input
          name="password"
          type="password"
          placeholder="Yout secret password"
        />

        <button type="submit">Login</button>
        <Link to="/register">Create your free account</Link>
      </Form>
    </>
  );
}
