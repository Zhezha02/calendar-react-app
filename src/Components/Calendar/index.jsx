import React, { useState } from 'react';
import { add, sub } from 'date-fns';
import CurrentDay from './CurrentDay';
import Month from './Month';
import styles from './Calendar.module.scss';
import { CheckedDayContext } from '../../contexts';
import '../../styles/fonts.scss';
// import PropTypes from 'prop-types';

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [checkedDay, setCheckedDay] = useState(new Date());

  const nextMonth = () => setCurrentDay(add(currentDay, { months: 1 }));
  const prevMonth = () => setCurrentDay(sub(currentDay, { months: 1 }));

  return (
    <CheckedDayContext.Provider value={{ checkedDay, setCheckedDay }}>
      <div className={styles.container}>
        <CurrentDay className={styles.containerPart} />
        <Month
          className={styles.containerPart}
          currentDay={currentDay}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />
      </div>
    </CheckedDayContext.Provider>
  );
};

// Calendar.propTypes = {};

export default Calendar;
