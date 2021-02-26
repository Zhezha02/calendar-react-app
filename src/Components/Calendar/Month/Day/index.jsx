import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import {
  format,
  isWithinInterval,
  startOfMonth,
  endOfMonth,
  isSameDay
} from 'date-fns'
import styles from './Day.module.scss'

const Day = props => {
  const { day, currentDay } = props
  const isCurrentMonth = isWithinInterval(day, {
    start: startOfMonth(currentDay),
    end: endOfMonth(currentDay)
  })
  return (
    <td
      className={cx({
        [styles.renderDay]: isCurrentMonth,
        [styles.invisible]: !isCurrentMonth,
        [styles.checkedDay]: isSameDay(day, currentDay)
      })}
    >
      {format(day, 'd')}
    </td>
  )
}
Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date)
}
export default Day
