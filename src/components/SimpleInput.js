import React, { useState } from 'react'

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTouched

  let formIsValid = false

  if (enteredNameIsValid) {
    formIsValid = true
  } else {
    formIsValid = false
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = event => {
    setEnteredNameIsTouched(true)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()
    setEnteredNameIsTouched(true)

    if (!enteredNameIsValid) {
      return
    }
    console.log(enteredName)

    setEnteredName('')
    setEnteredNameIsTouched(false)
  }

  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
