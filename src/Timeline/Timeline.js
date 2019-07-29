import React from 'react'
import './Timeline.css'

import Years from './Years'

const barWidth = 20;

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

      <div className="Content">
      {
        content.map((item, index) => {
          return (
            <div className="Item" style={{
              top: 100,
              left: index * barWidth + (index + 1) * barWidth / 3,
              height: '50%',
            }}>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default Timeline
