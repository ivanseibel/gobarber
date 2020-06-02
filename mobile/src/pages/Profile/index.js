import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container } from './styles';

const Profile = ({ navigation }) => {
  navigation.setOptions({
    tabBarLabel: 'My Profile',
    tabBarIcon: ({ color }) => {
      return <Icon name="person" size={20} color={color} />;
    },
  });

  return <Background />;
};

export default Profile;
