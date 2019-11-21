const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 4000
// body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 
const { users } = require('./state')
var counter = users.length + 1

/* BEGIN - create routes here */

// For part 1 of this homework had to be commented out for parts 2 and 3 for readability 
app.get('/users', (req, res) => {
  res.json(users)
})
// app.get('/users/1', (req, res) => {
//   res.json(users[0])
// })

// app.post('/users', (req, res) => {
//   let newUser = {
//     "_id": 6,
//     "name": "New Guy",
//     "occupation": "golfer",
//     "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
//   }
//   users.push(newUser)
//   res.json(users[users.length - 1])
// })

// app.put('/users/1', (req, res) => {
//   let firstUser = users[0]
//   firstUser.name = "wally"
//   firstUser.occupation = "racecar driver"
//   res.json(users[0])
// })

// app.delete('/users/1', (req, res) => {
//   users.splice(0, 1)
//   res.send('deleted')
// })
//for part 1 of hw.

//for part 2 of hw
app.post('/users', (req, res) => {
  users.push(req.body)
  req.body.id = counter
  counter++
  console.log(users[users.length - 1])
  res.json(users[users.length - 1])
})
//for part 2 of hw.

//for part 3 of hw. 
app.get('/users/:userId', (req, res) => {
  res.json(users.find(user => user._id === parseInt(req.params.userId)))
})

app.put('/users/:userId', (req, res) => {
  let user = users.find(user => user._id === parseInt(req.params.userId))
  user.occupation = "walmart employee"
  res.json('user ' + user._id + ' updated')
})

app.delete('/users/:userId', (req, res) => {
  let user = users.find(user => user._id === parseInt(req.params.userId))
  user.isActive = "false"
  res.send("deleted")
})
//for part 3 of hw.

/* END - create routes here */

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))