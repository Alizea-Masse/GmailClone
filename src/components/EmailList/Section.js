import React from 'react'
import './section.css'
function Section({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && "section--selected"}`} style={{
        borderBottom: `${selected && `3px solid ${color}`}`,
        color: `${selected && color}`,
        backgroundColor: `${selected && "whitesmoke"}`
    }}>
        <Icon />
        <h4>{title}</h4>
    </div>
  )
}

export default Section