import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import { format, startOfMonth, startOfWeek, add } from 'date-fns'
import Week from './Week'
import styles from './Month.module.scss'

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
  )
}

const Month = props => {
  const { date, className, nextMonth, prevMonth } = props

  const weeksOfMonth = () => {
    const weeksArray = []
    const startOfFirstWeek = startOfWeek(startOfMonth(date))
    for (let i = 0; i < 6; i++) {
      const firstDayOfWeek = add(startOfFirstWeek, { weeks: i })
      weeksArray.push(
        <Week
          key={`${format(startOfMonth(date), 'w') + i}_${format(date, 'R')}`}
          firstDayOfWeek={firstDayOfWeek}
          currentDay={date}
        />
      )
    }
    return weeksArray
  }

  return (
    <div className={cx(className, [styles.container])}>
      <h1 className={styles.header}>
        {format(date, 'LLLL')} {format(date, 'R')}
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
  )
}

Month.protoTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string,
  nextMonth: PropTypes.func,
  prevMonth: PropTypes.func
}

export default Month
