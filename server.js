const express = require('express')
const routes = require('./routes')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const db = require('./db')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

// app.use() middleware here ^ ///////////////////

app.use('/api', routes)
app.use('/auth', AuthRouter)
app.use('/user', UserRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
