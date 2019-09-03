import React from 'react'
import './Items.css'

const barWidth = 20

function datePointInRange(from, to, date) {
  const diff = date.getTime() - from.getTime()
  const full = to.getTime() - from.getTime()
  const percentage = (diff / full) * 100

  return percentage
}
function datePointInRangeReverse(from, to, date) {
  const diff = date.getTime() - from.getTime()
  const full = to.getTime() - from.getTime()
  const percentage = (diff / full) * 100

  return (100 - percentage)
}

function datesToPercentage(start, end, from, to) {
  to = to || end

  const full = Math.abs(start.getTime() - end.getTime())
  const diff = Math.abs(to.getTime() - from.getTime())
  const percentage = (diff / full) * 100
  return percentage
}

function Items ({ from, to, content }) {
  const numbered = content.map((item, index) => {
    return { item, index }
  })
  const ordered = numbered.sort((a, b) => {
    let c = a.item.date.from
    let d = b.item.date.from
    return d - c
  })

  const slots = Array.apply(null, Array(10)).map(() => true)

  return (
    <div className="Items">
    {
      ordered.map(({ item, index }) => {
        const { date, title, subtitle } = item

        const fromTop = datePointInRangeReverse(from, to, date.from)
        const fromBot = datePointInRange(from, to, date.from)

        const slot = Math.floor(fromTop / 10)

        console.log(slot)
        console.log(slots[slot])

        const label = slots[slot] ?
          <div className="Label" style={{
            bottom: fromBot + '%',
          }}>
            <div className="Main"> { title } </div>
            <div className="Sub"> { subtitle } </div>
          </div>
        :
          <div className="Label" style={{
            top: fromTop + '%',
          }}>
            <div className="Main"> { title } </div>
            <div className="Sub"> { subtitle } </div>
          </div>

        slots[slot] = false

        return (
          <React.Fragment key={index}>
            <div className="Item" style={{
              bottom: datePointInRange(from, to, date.from) + '%',
              left: index * barWidth + (index + 1) * barWidth / 4,
              height: datesToPercentage(from, to, date.from, date.to) + '%',
            }}>
            </div>
            <div className="Line" style={{
              bottom: datePointInRange(from, to, date.from) + '%',
              left: (index + 1) * barWidth + (index + 1) * barWidth / 4,
            }}>
            </div>
            { label }
          </React.Fragment>
        )
      })
    }
    </div>
  )
}

export default Items
