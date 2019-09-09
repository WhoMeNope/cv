import React from 'react'
import './Skills.css'

const Skills = ({ content }) => {
  return (
    <div className="Skills">
    {
      content.map(({ title }) => {
        return (
          <div className="section">
            { title }
          </div>
        )
      })
    }
    </div>
  );
}

export default Skills
