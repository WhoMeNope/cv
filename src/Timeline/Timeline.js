import React from 'react'
import './Timeline.css'

import Years from './Years'
import Items from './Items'

function minMaxDates (content) {
  let min = content[0].date.from
  let max = content[0].date.from

  return { min, max }
}

function Timeline ({ content }) {
  const { min, max } = minMaxDates(content)

  const from = new Date(2012, 0)
  const to = new Date()

  return (
    <div className="Timeline">
      <Years from={from} to={to} />
      <Items from={from} to={to} content={content} />
    </div>
  );
}

export default Timeline
