import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = ({ data, onCancel }) => {
  const { provider, date, past, cancelable, id, canceled_at } = data;

  const fakeAvatar = () => {
    return `https://api.adorable.io/avatars/50/${provider.name}.png`;
  };

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(date), new Date(), { addSuffix: true });
  }, [date]);

  return (
    <Container past={past}>
      <Left>
        <Avatar
          source={{ uri: provider.avatar ? provider.avatar.url : fakeAvatar() }}
        />

        <Info>
          <Name>{provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {cancelable && !canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Appointment;
