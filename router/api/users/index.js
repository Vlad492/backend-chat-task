const router = require('express').Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
const Users = require('../../../controllers/usersControllers/controllers')

router.post('/api/users/create', Users.create)//create a new user

module.exports = router