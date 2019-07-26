import React from 'react'
import './Timeline.css'

import Years from './Years'

function Timeline () {
  const from = 2012
  const to = 2019

  const count = to - from + 1
  const years = [...Array(count).keys()].map(year => year + from)

  return (
    <div className="Timeline">
      <Years from={from} to={to} />
    </div>
  );
}

export default Timeline
