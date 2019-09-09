import React from 'react'
import './Skills.css'

const Skills = ({ content }) => {
  return (
    <div className="Skills">
    {
      content.map(({ title, items }) => {
        return (
          <div className="section">
            { title }
          {
            items.map(({ title, subtitle }) => {
              return (
                <div>
                  { title } : { subtitle }
                </div>
              )
            })
          }
          </div>
        )
      })
    }
    </div>
  );
}

export default Skills
