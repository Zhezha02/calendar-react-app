import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';


const Day = (props) => {
  const { day, currentDay } = props;
  return <td>
{format(day, 'd')}
  </td>;
};
Week.propTypes = {
  key: PropTypes.string,
  day: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date),
};
export default Day;
