import React from 'react'
import './Years.css'

function yearFraction(date) {
  const days = (date.getTime() - new Date(date.getFullYear(), 0)) / (1000 * 60 * 60 * 24)
  const fraction = days / 365

  return fraction
}

function Years ({ from, to }) {
  const count = to.getFullYear() - from.getFullYear()
  const years = [...Array(count).keys()].map(year => year + from.getFullYear())

  return (
    <div className="Years">
    {
      years.map(year => (
        <div className="Year">
          <div className="Label">
            { year }
          </div>
          <div className="Bar"></div>
        </div>
      ))
    }
      <div className="Year" style={{flex: yearFraction(to)}}>
        <div className="Label">
          { to.getFullYear() }
        </div>
        <div className="Bar"></div>
      </div>
    </div>
  )
}

export default Years
