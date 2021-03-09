import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import classNames from 'classnames/bind';
import styles from './CurrentDay.module.scss';
import { CheckedDayContext } from '../../../contexts';

const CurrentDay = prors => {
  const { className } = prors;
  const { checkedDay } = useContext(CheckedDayContext);
  
  return (
    <div className={classNames(className, [styles.container])}>
      <p className={styles.dayOfWeek}>{format(checkedDay, 'eeee')}</p>
      <p className={styles.dayOfMonth}>{format(checkedDay, 'd')}</p>
    </div>
  );
};

CurrentDay.propTypes = {
  className: PropTypes.string,
};
export default CurrentDay;
