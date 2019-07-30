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
        from: new Date(2012, 3, 1),
        to: new Date(2013, 8, 1),
      },
      title: "Long Item Title 1",
    },
    {
      date: {
        from: new Date(2013, 8, 1),
        to: new Date(2019, 0, 1),
      },
      title: "Even Longer Item Title 2",
    },
    {
      date: {
        from: new Date(2015, 0, 1),
      },
      title: "Short Item 3",
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
