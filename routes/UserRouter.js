const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get('/all', controller.GetUsers)
router.get('/:id', controller.getUserById)
router.delete('/delete/:id', controller.DeleteUser)
module.exports = router
