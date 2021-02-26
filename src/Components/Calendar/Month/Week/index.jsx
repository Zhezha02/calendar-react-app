import React from 'react'
import PropTypes from 'prop-types'
import { add, format } from 'date-fns'
import Day from '../Day'

const Week = props => {
  const { firstDayOfWeek, currentDay } = props
  const daysOfWeek = () => {
    const daysArray = []

    for (let i = 0; i < 7; i++) {
      const renderDay = add(firstDayOfWeek, { days: i })
      daysArray.push(
        <Day
          key={format(renderDay, 'iii')}
          day={renderDay}
          currentDay={currentDay}
        />
      )
    }
    return daysArray
  }
  return <tr>{daysOfWeek()}</tr>
}

Week.propTypes = {
  firstDayOfWeek: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date)
}
export default Week
