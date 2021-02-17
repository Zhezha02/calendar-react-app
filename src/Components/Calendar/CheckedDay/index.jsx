import React from 'react';
import { getDay, getDate } from 'date-fns';

const dayOfWeek = new Map([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday']
]);

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
