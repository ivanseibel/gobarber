import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';

import { Container, Title, List } from './styles';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import api from '~/services/api';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const response = await api.get('appointments');
        setAppointments(response.data);
      } catch (error) {
        Alert.alert(error.message);
      }
    }

    loadAppointments();
  }, []);

  const handleCancel = async (id) => {
    try {
      const response = await api.delete(`appointments/${id}`);
      setAppointments(
        appointments.map((a) =>
          a.id === id
            ? { ...a, canceled_at: response.data.canceled_at }
            : { ...a }
        )
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Background>
      <Container>
        <Title>Appointments</Title>
        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onCancel={() => {
                handleCancel(item.id);
              }}
            />
          )}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
