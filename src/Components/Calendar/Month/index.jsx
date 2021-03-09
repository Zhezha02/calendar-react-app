import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import {
  format,
  startOfMonth,
  startOfWeek,
  add,
  eachWeekOfInterval,
} from 'date-fns';
import Week from './Week';
import styles from './Month.module.scss';

const DaysOfWeek = () => {
  return (
    <tr>
      <td>S</td>
      <td>M</td>
      <td>T</td>
      <td>W</td>
      <td>T</td>
      <td>F</td>
      <td>S</td>
    </tr>
  );
};

const Month = props => {
  const { currentDay, className, nextMonth, prevMonth } = props;

  const weeksOfMonth = () => {
    const startOfFirstWeek = startOfWeek(startOfMonth(currentDay));
    const endOfLastWeek = add(startOfFirstWeek, { weeks: 5 }); //maximum 6 weeks per month

    return eachWeekOfInterval({
      start: startOfFirstWeek,
      end: endOfLastWeek,
    }).map(startOfWeek => (
      <Week
        key={`${format(startOfWeek, 'w')}`}
        firstDayOfWeek={startOfWeek}
        currentDay={currentDay}
      />
    ));
  };

  return (
    <div className={cx(className, styles.container)}>
      <h1 className={styles.header}>
        {format(currentDay, 'LLLL')} {format(currentDay, 'R')}
      </h1>

      <div className={styles.monthWrapper}>
        <button className={styles.btn} onClick={prevMonth}>
          {'<'}
        </button>

        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <DaysOfWeek />
          </thead>
          <tbody>{weeksOfMonth()}</tbody>
        </table>

        <button className={styles.btn} onClick={nextMonth}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

Month.propTypes = {
  currentDay: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string,
  nextMonth: PropTypes.func,
  prevMonth: PropTypes.func,
};

export default Month;
