import React from 'react';
import './Timeline.css';

function Timeline () {
  const from = 2012
  const to = 2019

  const count = to - from + 1
  const years = [...Array(count).keys()].map(year => year + from)

  return (
    <div className="Timeline">
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
    </div>
  );
}

export default Timeline
