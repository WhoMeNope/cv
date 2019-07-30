import React from 'react'
import './Items.css'

const barWidth = 20

function datePointInRange(from, to, date) {
  const diff = date.getTime() - from.getTime()
  const full = to.getTime() - from.getTime()
  const percentage = (diff / full) * 100

  return percentage + '%'
}
function datesToPercentage(start, end, from, to) {
  to = to || end

  const full = Math.abs(start.getTime() - end.getTime())
  const diff = Math.abs(to.getTime() - from.getTime())
  const percentage = (diff / full) * 100
  return percentage + '%'
}

function Items ({ from, to, content }) {
  return (
    <div className="Items">
    {
      content.map(({ date, title }, index) => {
        return (
          <React.Fragment>
            <div className="Item" style={{
              top: datePointInRange(from, to, date.from),
              left: index * barWidth + (index + 1) * barWidth / 4,
              height: datesToPercentage(from, to, date.from, date.to),
            }}>
            </div>
            <div className="Line" style={{
              top: datePointInRange(from, to, date.from),
              left: (index + 1) * barWidth + (index + 1) * barWidth / 4,
            }}>
            </div>
          </React.Fragment>
        )
      })
    }
    </div>
  )
}

export default Items
