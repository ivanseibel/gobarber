import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, List } from './styles';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

const Dashboard = ({ navigation }) => {
  navigation.setOptions({
    tabBarLabel: 'Appointments',
    tabBarIcon: ({ color }) => {
      return <Icon name="event" size={20} color={color} />;
    },
  });

  const data = [1, 2, 3, 4, 5];

  return (
    <Background>
      <Container>
        <Title>Appointments</Title>
        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.shape.isRequired,
};

export default Dashboard;
