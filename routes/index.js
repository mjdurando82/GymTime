const { Router } = require('express')
const AuthController = require('../controllers/AuthController')
const router = Router()

router.get('/', (req, res) => res.send('This is the root path'))
//Routes for Auth
// router.post('auth/register', AuthController.Register)

module.exports = router
