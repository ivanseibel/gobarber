import React, { useState, useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { format, subDays, addDays } from 'date-fns';

import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const formattedDate = useMemo(() => format(date, 'MMM do'), [date]);

  function handleSubDays() {
    setDate(subDays(date, 1));
  }

  function handleAddDays() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleSubDays}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{formattedDate}</strong>
        <button type="button" onClick={handleAddDays}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Mila Miloca</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Available</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Jacks</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Walter</span>
        </Time>
      </ul>
    </Container>
  );
}
