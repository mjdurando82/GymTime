const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const WorkoutRouter = require('./routes/WorkoutRouter')
const ExerciseRouter = require('./routes/ExerciseRouter')
const CommentRouter = require('./routes/CommentRouter')

const db = require('./db')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))

// app.use() middleware here ^ ///////////////////

app.use('/', routes)
app.use('/auth', AuthRouter)
app.use('/user', UserRouter)
app.use('/workout', WorkoutRouter)
app.use('/exercise', ExerciseRouter)
app.use('/exercise', ExerciseRouter)
app.use('/comment', CommentRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
