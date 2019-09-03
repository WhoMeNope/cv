import React from 'react'
import './Items.css'

const barWidth = 20

function datePointInRange(from, to, date) {
  const diff = date.getTime() - from.getTime()
  const full = to.getTime() - from.getTime()
  const percentage = (diff / full) * 100

  return percentage + '%'
}
function datePointInRangeReverse(from, to, date) {
  const diff = date.getTime() - from.getTime()
  const full = to.getTime() - from.getTime()
  const percentage = (diff / full) * 100

  return (100 - percentage) + '%'
}

function datesToPercentage(start, end, from, to) {
  to = to || end

  const full = Math.abs(start.getTime() - end.getTime())
  const diff = Math.abs(to.getTime() - from.getTime())
  const percentage = (diff / full) * 100
  return percentage + '%'
}

function Items ({ from, to, content }) {
  const numbered = content.map((item, index) => {
    return {item, index}
  })
  const ordered = numbered.sort((a, b) => {
    let c = a.item.date.to || new Date()
    let d = b.item.date.to || new Date()
    return d - c
  })
  return (
    <div className="Items">
    {
      ordered.map(({ item, index }) => {
        const { date, title, subtitle } = item

        return (
          <React.Fragment key={index}>
            <div className="Item" style={{
              bottom: datePointInRange(from, to, date.from),
              left: index * barWidth + (index + 1) * barWidth / 4,
              height: datesToPercentage(from, to, date.from, date.to),
            }}>
            </div>
            <div className="Line" style={{
              bottom: datePointInRange(from, to, date.from),
              left: (index + 1) * barWidth + (index + 1) * barWidth / 4,
            }}>
            </div>
            <div className="Label" style={{
              bottom: datePointInRange(from, to, date.from),
            }}>
              { title }
            </div>
            <div className="Sublabel" style={{
              top: datePointInRangeReverse(from, to, date.from),
            }}>
              { subtitle }
            </div>
          </React.Fragment>
        )
      })
    }
    </div>
  )
}

export default Items
