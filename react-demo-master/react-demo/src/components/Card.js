import React from 'react'

export default function Card(props) {
  return (
    <div className="card text-bg-success mb-3" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <h6 className="card-subtitle mb-2 text-body-light">{props.subtitles}</h6>
      <p className="card-text">{props.desc}</p>
    </div>
  </div>
  )
}
