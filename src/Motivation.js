import React from 'react'
import './Motivation.css'

const Motivation = ({ text }) => {
  return (
    <div className="Motivation">
      <div className="title">Motivation</div>
      <div className="container">
        { text }
      </div>
    </div>
  )
}

export default Motivation
