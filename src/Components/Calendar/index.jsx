import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import Month from './Month';
import styles from './Calendar.module.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <div className={styles.container}>
        <CurrentDay className={styles.containerPart} date={date} />
        <Month className={styles.containerPart} date={date} />
      </div>
    );
  }
}

export default Calendar;
