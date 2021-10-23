const { addUser, getUsers, getOneUser, editUser, deleteUser } = require('../controllers/usersControls')
const router = require('express').Router()

router.post('/add', addUser) // add user route
router.get('/users', getUsers) //show all users route
router.get('/users/:id', getOneUser) //show one user route
router.put('/edit/:id', editUser) // edit a user route
router.delete('/remove/:id', deleteUser) //remove a user

module.exports = router