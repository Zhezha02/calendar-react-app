import React from 'react';
import PropTypes from 'prop-types';
import { format, startOfMonth, startOfWeek, add } from 'date-fns';
import Week from './Week';


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

const Month = (props) => {
  const { date, className } = props;

  const weeksOfMonth = () => {
    const weeksArray = [];
    const startOfFirstWeek = startOfWeek(startOfMonth(date));
    for (let i = 0; i < 6; i++) {
      const firstDayOfWeek = add(startOfFirstWeek, { weeks: i });
      const currentWeek = format(startOfMonth(date), 'w') + i;
      const currentYear = format(date, 'R');
      weeksArray.push(
        <Week
          key={`${currentYear}_${currentWeek}`}
          firstDayOfWeek={firstDayOfWeek}
          currentDay={date}
        />
      );
    }
    return weeksArray;
  };
  return (
    <div className= {className}>
      <h1>
        {format(date, 'LLLL')} {format(date, 'R')}
      </h1>
      <table>
        <thead>
          <DaysOfWeek />
        </thead>
        <tbody>{weeksOfMonth()}</tbody>
      </table>
    </div>
  );
};

Month.protoTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string,
};

export default Month;
