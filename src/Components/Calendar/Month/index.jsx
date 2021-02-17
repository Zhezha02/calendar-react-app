import React, { Component } from 'react';
import { getMonth, getYear } from 'date-fns';
import {monthOfYear, dayOfWeek} from '../date';
import Week from './Week';



class Month extends Component {
  renderTableHead=()=> {
      const head = [];
      for(let i = 0; i < 7; i++) {
        head.push(<td>{dayOfWeek.get(i)[0]}</td>);
      }
      return head;
  }
  render() {
    const{date} = this.props;
    return <div>
      <p>{monthOfYear.get(getMonth(date))} {getYear(date)}</p>
      <table>
        <thead>
          <tr>{this.renderTableHead()}</tr>
        </thead>
      </table>
    </div>;
  }
}

export default Month;
