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

function getColor(category, pallete, colorDict) {
  function RGB_Log_Shade (p,c) {
    var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:p*255**2,P=P?1+p:1-p;
    return"rgb"+(d?"a(":"(")+r((P*i(a[3]=="a"?a.slice(5):a.slice(4))**2+t)**0.5)+","+r((P*i(b)**2+t)**0.5)+","+r((P*i(c)**2+t)**0.5)+(d?","+d:")");
  }

  const colorCount = pallete.length
  const assignedColors = Object.keys(colorDict).length

  if (assignedColors >= colorCount - 1) {
    return pallete[colorCount - 1]
  }

  const color = colorDict[category] || pallete[assignedColors]
  colorDict[category] = color

  return color
}

const pallete = [
  'rgb(191, 178, 243)',
  'rgb(150, 202, 247)',
  'rgb(156, 220, 170)',
  'rgb(229, 225, 171)',
  'rgb(243, 198, 165)',
  'rgb(248, 163, 168)',
]

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

  const colorDictionary = {}

  return (
    <div className="Items">
    {
      ordered.map(({ item, index }) => {
        const { date, category, title, subtitle } = item

        const color = getColor(category, pallete, colorDictionary)

        const fromTop = datePointInRangeReverse(from, to, date.from)
        const fromBot = datePointInRange(from, to, date.from)

        const slot = Math.floor(fromTop / 10)

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
              background: color,
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
