import React from 'react';
import PropTypes from 'prop-types';
import { format, endOfWeek, eachDayOfInterval } from 'date-fns';
import Day from '../Day';

const Week = props => {
  const { firstDayOfWeek, currentDay } = props;
  const daysOfWeek = () => {
    const lastDayOfWeek = endOfWeek(firstDayOfWeek);
    return eachDayOfInterval({ start: firstDayOfWeek, end: lastDayOfWeek }).map(
      day => <Day key={format(day, 'iii')} day={day} currentDay={currentDay} />
    );
  };

  return <tr>{daysOfWeek()}</tr>;
};

Week.propTypes = {
  firstDayOfWeek: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date),
};
export default Week;
