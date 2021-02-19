import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const CurrentDay = (prors) => {
  const { date, className } = prors;

  return (
    <div className={className}>
      <p>{format(date, 'eeee')}</p>
      <p>{format(date, 'd')}</p>
    </div>
  );
};

CurrentDay.protoTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string,
};
export default CurrentDay;
