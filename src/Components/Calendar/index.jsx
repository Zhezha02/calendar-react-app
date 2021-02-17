import React, { Component } from 'react';
import CheckedDay from './CheckedDay';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  render() {
    const{date} = this.state;
    return (
      <div>
        <CheckedDay date={date}/>
      </div>
    );
  }
}

export default Calendar;
