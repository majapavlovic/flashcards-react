import React from 'react'

function Flashcard({flashcard}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{flashcard.question}</h5>
        <p className="card-text">{flashcard.answer}</p>
        <span style={{float:"right"}}>{flashcard.category}</span>
      </div>
    </div>
  )
}

export default Flashcard
