import React from 'react'
import './Timeline.css'

import Years from './Years'
import Items from './Items'

function minMaxDates (content) {
  let min = content[0].date.from
  let max = content[0].date.from

  content.forEach(({date}) => {
    console.log(date)
    if ('from' in date) {
      min = date.from < min ? date.from : min
    }
    if ('to' in date) {
      max = date.to > max ? date.to : max
    }
  })

  return { min, max }
}

function orderContent(content) {
  let ordered = []

  while (content.length) {
    const pivot = content.shift()

    ordered.push(pivot)
    content.forEach((elem) => {
      if (elem.category === pivot.category)
        ordered.push(elem)
    })
    content = content.filter(elem => elem.category !== pivot.category)
  }

  return ordered
}

function Timeline ({ content }) {
  const { min, max } = minMaxDates(content)

  // content = orderContent(content)
  content = content.sort((a, b) => a.date.from - b.date.from)

  const from = new Date(min.getFullYear(), 0)
  const to = new Date()

  return (
    <div className="Timeline">
      <Years from={from} to={to} />
      <Items from={from} to={to} content={content} />
    </div>
  )
}

export default Timeline
