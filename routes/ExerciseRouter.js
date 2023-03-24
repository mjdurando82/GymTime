const router = require('express').Router()
const controller = require('../controllers/ExerciseController')
const middleware = require('../middleware')

router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createExercise
)

router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getExercises
)

router.delete(
  '/delete/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteExercise
)

router.put(
  '/update/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateExercise
)
module.exports = router
