import React from 'react'
import './Years.css'

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
    </div>
  )
}

export default Years
