import React from 'react';
import { getDay, getDate } from 'date-fns';
import {dayOfWeek} from '../date';


const CheckedDay = (prors) => {
  const { date } = prors;

  return (
    <div>
      <p>{dayOfWeek.get(getDay(date))}</p>
      <p>{getDate(date)}</p>
    </div>
  );
};

export default CheckedDay;
