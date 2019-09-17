import React from 'react'
import './Footer.css'

function Footer () {
  return (
    <div className="Footer">
      <div className="Link">
        <span>Online version: </span>
        <a href={window.location.href}>{ window.location.href }</a>
      </div>
      <div className="Link">
        <span>Source (GPLv3): </span>
        <a href="https://github.com/WhoMeNope/cv">
          https://github.com/WhoMeNope/cv
        </a>
      </div>
    </div>
  )
}

export default Footer
