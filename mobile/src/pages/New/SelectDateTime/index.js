import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { Container, HourList, Hour, Title } from './styles';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import api from '~/services/api';

const SelectDateTime = ({ navigation, route }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [date, setDate] = useState(new Date());
  const { provider } = route.params;

  useEffect(() => {
    const loadTimes = async () => {
      try {
        const response = await api.get(`providers/${provider.id}/available`, {
          params: { date: date.getTime() },
        });
        setAvailableTimes(response.data);
      } catch (error) {
        Alert.alert(error.message);
      }
    };
    loadTimes();
  }, [date]);

  const handleSelectTime = (time) => {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  };

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={availableTimes}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectTime(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectDateTime;
