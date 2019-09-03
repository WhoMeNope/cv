import React from 'react'
import './Footer.css'

function Footer () {
  return (
    <div className="Footer">
      <div className="Link">
        <span>Online version: </span>
        <a href={window.location.href}>{ window.location.href }</a>
      </div>
    </div>
  )
}

export default Footer
