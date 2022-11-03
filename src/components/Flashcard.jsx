import React from 'react'
import { Link } from 'react-router-dom'

function Flashcard({flashcard}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{flashcard.question}</h5>
        <p className="card-text">{flashcard.answer}</p>
      </div>
    </div>
  )
}

export default Flashcard
