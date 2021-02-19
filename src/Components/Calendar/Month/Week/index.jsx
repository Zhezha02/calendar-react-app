import React from 'react';
import PropTypes from 'prop-types';
import { add } from 'date-fns';
import Day from '../Day';

const Week = (props) => {
  const { firstDayOfWeek, currentDay, key } = props;
  const daysOfWeek = () => {
    const daysArray = [];

    for (let i = 0; i < 7; i++) {
      daysArray.push(
        <Day key={`${key}_${i}`} day={add(firstDayOfWeek, { days: i })} currentDay={currentDay} />
      );
    }
    return daysArray;
  };
  return <tr>{daysOfWeek()}</tr>;
};

Week.propTypes = {
  key: PropTypes.string,
  firstDayOfWeek: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date),
};
export default Week;
