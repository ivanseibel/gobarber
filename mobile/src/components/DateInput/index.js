import React, { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Container, DateButton, DateText } from './styles';

const DateInput = ({ date, onChange }) => {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(() => {
    return format(date, 'do MMMM yyyy');
  }, [date]);

  const handleChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    onChange(currentDate);
  };

  return (
    <Container>
      <DateButton
        onPress={() => {
          setOpened(!opened);
        }}
      >
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          minimumDate={new Date()}
          display="default"
          onChange={handleChangeDate}
        />
      )}
    </Container>
  );
};

export default DateInput;
