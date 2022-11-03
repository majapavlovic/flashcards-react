import React from 'react'

function AddQuestion() {
  return (
    <div className="addquestion">
      <label for="question">Question</label>
      <textarea className="form-control" name="question" id="question" rows="3"></textarea>
      <label for="answer">Answer</label>
      <textarea className="form-control" name="answer" id="answer" rows="3"></textarea>
      <label for="category">Category</label>                                    
      <select className="form-select" name="category_id" id = "category_id">
        <option>Biology</option>
        <option>Geography</option>
        <option>History</option>
        <option>Music</option>
      </select><br/>
      <button className="form-control">Add</button>
    </div>
  )
}

export default AddQuestion
