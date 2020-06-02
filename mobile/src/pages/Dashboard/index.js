import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

import Background from '~/components/Background';

const Dashboard = ({ navigation }) => {
  navigation.setOptions({
    tabBarLabel: 'Appointments',
    tabBarIcon: ({ color }) => {
      return <Icon name="event" size={20} color={color} />;
    },
  });

  return <Background />;
};

Dashboard.propTypes = {
  navigation: PropTypes.shape.isRequired,
};

export default Dashboard;
