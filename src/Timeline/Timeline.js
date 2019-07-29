import React from 'react'
import './Timeline.css'

import Years from './Years'
import Items from './Items'

function Timeline () {
  const from = 2012
  const to = 2019

  const count = to - from + 1
  const years = [...Array(count).keys()].map(year => year + from)

  const content = [
    {
      date: {
        from: new Date(2012, 8, 1),
        to: new Date(2013, 8, 1),
      },
      title: "Item 1",
    },
    {
      date: {
        from: new Date(2012, 8, 1),
        to: new Date(2013, 8, 1),
      },
      title: "Item 2",
    },
  ]

  return (
    <div className="Timeline">
      <Years from={from} to={to} />
      <Items from={from} to={to} content={content} />
    </div>
  );
}

export default Timeline
