import React, { Component } from 'react';
import { add, sub } from 'date-fns';
import CurrentDay from './CurrentDay';
import Month from './Month';
import styles from './Calendar.module.scss';

import '../../styles/fonts.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), month: new Date() };
  }
  nextMonth = () => {
    this.setState(() => {
      const { month } = this.state;
      return { month: add(month, { months: 1 }) };
    });
  };

  prevMonth = () => {
    this.setState(() => {
      const { month } = this.state;
      return { month: sub(month, { months: 1 }) };
    });
  };
  render() {
    const { date, month } = this.state;
    return (
      <div className={styles.container}>
        <CurrentDay className={styles.containerPart} date={date} />
        <Month
          className={styles.containerPart}
          date={month}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
        />
      </div>
    );
  }
}

export default Calendar;
