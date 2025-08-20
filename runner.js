const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU1MzczZDVkLWIwNDMtNDBjYS1hMDFiLTlkZTFlZjQ0NzEwZS0xNzU1Njc5NzEyNjc5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNGNmNGMwOWUtMDU5ZC00NzZiLTk5M2YtZjZhNjRmNzBiZTFlIiwidHlwZSI6InQifQ.lbaUeJqtNMt65wu7nFh6zIcxuASlBfyWkrlCBtKyin4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})