import React from 'react'
import './Experience.css'

const Experience = ({ content }) => {
  return (
    <div className="Experience">
      <div className="title">Experience</div>
      <div className="container">
      {
        content.map(({ title, position }) => {
          return (
            <div>
              { title }
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Experience
