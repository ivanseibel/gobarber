import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import Background from '~/components/Background';

import { updateProfileRequest } from '~/store/modules/user/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
} from './styles';

const Profile = ({ navigation }) => {
  navigation.setOptions({
    tabBarLabel: 'My Profile',
    tabBarIcon: ({ color }) => {
      console.log(color);
      return <Icon name="person" size={20} color={color} />;
    },
  });

  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = () => {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        confirmPassword,
      })
    );
  };

  useEffect(() => {
    setPassword('');
    setOldPassword('');
    setConfirmPassword('');
  }, [profile]);

  return (
    <Background>
      <Container>
        <Title>My Profile</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Full name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={setName}
            value={name}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            onChangeText={setEmail}
            value={email}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Actual password"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setOldPassword}
            value={oldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="New password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            onChangeText={setPassword}
            value={password}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirm new password"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Update profile</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
};

export default Profile;
