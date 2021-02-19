import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { format, isWithinInterval, startOfMonth, endOfMonth } from 'date-fns';
import styles from './Day.module.scss';

const Day = (props) => {
  const { day, currentDay } = props;
  const isCurrentMonth = isWithinInterval(day, {
    start: startOfMonth(currentDay),
    end: endOfMonth(currentDay),
  });
  return (
    <td
      className={classNames({
        [styles.renderDay]: isCurrentMonth,
        [styles.invisible]: !isCurrentMonth,
      })}
    >
      {format(day, 'd')}
    </td>
  );
};
Day.propTypes = {
  key: PropTypes.string,
  day: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date),
};
export default Day;