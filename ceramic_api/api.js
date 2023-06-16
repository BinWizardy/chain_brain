const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {

var query = `{
  "data": {
    "Dashboard": {
      "userInput": $userInput,
      "gql": $gql
      "feedback": $feedback
    }
  }
}`;

const userInput = req.body.userInput;
const gql = req.body.gql;
const feedback = req.body.feedback;

fetch('http://localhost:7007', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { userInput, gql, feedback },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
