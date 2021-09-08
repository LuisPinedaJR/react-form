import React, { useState, useRef } from 'react'

const SimpleInput = props => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  // using useState \/
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }
  // using useState & useRef \/
  const formSubmissionHandler = event => {
    event.preventDefault()
    // using useState
    console.log(enteredName)
    // using useRef \/
    const enteredValue = nameInputRef.current.value
    console.log(enteredValue)
    // using useRef but no ideal DONT MANIPULATE DOM
    nameInputRef.current.value = ''
    // using useState
    setEnteredName('')
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          // using useRef \/
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
