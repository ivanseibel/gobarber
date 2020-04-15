import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Email address" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Actual password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Logoff</button>
    </Container>
  );
}
