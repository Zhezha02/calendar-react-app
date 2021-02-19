import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const CurrentDay = (prors) => {
  const { date } = prors;

  return (
    <div>
      <p>{format(date, 'eeee')}</p>
      <p>{format(date, 'd')}</p>
    </div>
  );
};

CurrentDay.protoTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
export default CurrentDay;
