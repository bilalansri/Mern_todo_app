const {Router} = require('express')
const {saveUser, loginUser} = require('../controllers/userController')

const router = Router()


router.post('/login', loginUser)
router.post('/signup', saveUser)

module.exports = router