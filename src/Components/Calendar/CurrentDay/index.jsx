import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import classNames from 'classnames/bind';
import styles from './CurrentDay.module.scss';

const CurrentDay = prors => {
  const { date, className } = prors;

  return (
    <div className={classNames(className, [styles.container])}>
      <p className={styles.dayOfWeek}>{format(date, 'eeee')}</p>
      <p className={styles.dayOfMonth}>{format(date, 'd')}</p>
    </div>
  );
};

CurrentDay.protoTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string,
};
export default CurrentDay;
