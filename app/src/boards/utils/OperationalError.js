/*
Operations errors (e.g. API received an invalid input) refer to known cases where the error impact is fully understood and can be handled thoughtfully.
Programmer error (e.g. trying to read undefined variable) refers to unknown code failures that dictate to gracefully restart the application.
*/
class OperationalError extends Error {
  constructor (code, message, data) {
    // Pass arguments to parent constructor
    super(message)

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, OperationalError)
    }

    // Custom fields
    this.isOperational = true
    this.code = code
    this.data = data
  }
}

module.exports = OperationalError
