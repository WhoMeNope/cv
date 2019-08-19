import React from 'react'
import './Years.css'

function yearFraction(date) {
  const days = (date.getTime() - new Date(date.getFullYear(), 0)) / (1000 * 60 * 60 * 24)
  const fraction = days / 365

  return fraction
}

function Years ({ from, to }) {
  const count = to.getFullYear() - from.getFullYear()
  const years = [...Array(count).keys()]
    .map(index => to.getFullYear() - index - 1)

  return (
    <div className="Years">
      <div className="Year" style={{flex: yearFraction(to)}}>
        <div className="Label">
          { to.getFullYear() }
        </div>
        <div className="Bar"></div>
      </div>
    {
      years.map((year, index) => (
        <div className="Year" key={index}>
          <div className="Label">
            { year }
          </div>
          <div className="Bar"></div>
        </div>
      ))
    }
    </div>
  )
}

export default Years
