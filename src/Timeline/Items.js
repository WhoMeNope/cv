import React from 'react'
import './Items.css'

const barWidth = 20

function Items ({ from, to, content }) {
  const count = to - from + 1

  return (
    <div className="Items">
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
  )
}

export default Items
