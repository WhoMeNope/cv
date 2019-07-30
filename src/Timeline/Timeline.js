import React from 'react'
import './Timeline.css'

import Years from './Years'
import Items from './Items'

function Timeline () {
  const from = new Date(2012, 0)
  const to = new Date()

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
        from: new Date(2013, 8, 1),
        to: new Date(2019, 0, 1),
      },
      title: "Item 2",
    },
    {
      date: {
        from: new Date(2015, 0, 1),
      },
      title: "Item 3",
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
