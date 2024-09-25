const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllComments)

router.post(
  '/new/:workout_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
router.put(
  '/update/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)
router.get('/workout/:id', controller.GetCommentsForWorkout)
router.delete(
  '/delete/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)
router.delete('/delete/:comment_id', controller.DeleteComment)

module.exports = router
