import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';

import api from '~/services/api';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

import Background from '~/components/Background';

const Confirm = ({ navigation, route }) => {
  const { provider, time } = route.params;
  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(time), new Date());
  }, [time]);

  const handleAddAppointment = async () => {
    try {
      await api.post('appointments', {
        provider_id: provider.id,
        date: time,
      });

      navigation.navigate('Appointments');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Background>
      <Container>
        <Avatar
          source={
            provider.avatar
              ? { uri: provider.avatar.url }
              : {
                  uri: `https://api.adorable.io/avatars/50/${provider.name}.png`,
                }
          }
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirm your appointment
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default Confirm;
