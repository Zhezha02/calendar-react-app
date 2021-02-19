import React, { Component } from 'react';

import CurrentDay from './CurrentDay';
import Month from './Month';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <CurrentDay date={date} />
        <Month date={date} />
      </div>
    );
  }
}

export default Calendar;
