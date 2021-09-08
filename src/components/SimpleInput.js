import React, { useState } from 'react'

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTouched
  // not the best wat to check @ for email but it'll do for now
  const enteredEmailIsValid = enteredEmail.includes('@')
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  } else {
    formIsValid = false
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }

  const nameInputBlurHandler = event => {
    setEnteredNameIsTouched(true)
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()
    setEnteredNameIsTouched(true)

    if (!enteredNameIsValid) {
      return
    }
    console.log(enteredName)
    //name reset
    setEnteredName('')
    setEnteredNameIsTouched(false)
    // email reset
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = enteredEmailIsInvalid
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid E-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
