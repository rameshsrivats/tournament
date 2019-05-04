const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const keys = require('./config/keys')
const userRouter = require('./routes/api/user')
const fixtureRouter = require('./routes/api/fixture')
const squadRouter = require('./routes/api/squad')

// Set up Express
const app = express()
app.use(express.json())


// Connect DB
mongoose
    .connect(keys.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false    
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB not connected: ', err))

app.use(cors())


// Use routes
app.use('/api/users', userRouter)
app.use('/api/fixtures', fixtureRouter)
app.use('api/squads', squadRouter)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is up on port ${port}`))
