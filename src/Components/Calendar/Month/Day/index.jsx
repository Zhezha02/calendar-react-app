import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import {
  format,
  isWithinInterval,
  startOfMonth,
  endOfMonth,
  isToday,
  isSameDay,
} from 'date-fns';
import styles from './Day.module.scss';
import { CheckedDayContext } from '../../../../contexts';

const Day = props => {
  const { day, currentDay } = props;

  const { checkedDay, setCheckedDay } = useContext(CheckedDayContext);

  const isCurrentMonth = isWithinInterval(day, {
    start: startOfMonth(currentDay),
    end: endOfMonth(currentDay),
  });

  const dayClasses = cx({
    [styles.renderDay]: isCurrentMonth,
    [styles.invisible]: !isCurrentMonth,
    [styles.currentDay]: isToday(day),
    [styles.checkedDay]: isSameDay(day, checkedDay),
  });

  return (
    <td className={dayClasses} onDoubleClick={() => setCheckedDay(day)}>
      {format(day, 'd')}
    </td>
  );
};

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date),
};

export default Day;
