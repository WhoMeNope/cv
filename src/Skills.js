import React from 'react'
import './Skills.css'

const Skills = ({ content }) => {
  return (
    <div className="Skills">
    {
      content.map(({ title, items }) => {
        return (
          <div className="section">
            <div className="title">{ title }</div>
            <ul className="items">
            {
              items.map(({ title, subtitle }) => {
                return (
                  <li>
                    { title }{ subtitle ? ': ' : null }
                    <div className="sub">{ subtitle }</div>
                  </li>
                )
              })
            }
            </ul>
          </div>
        )
      })
    }
    </div>
  );
}

export default Skills
