const User = require('../models/User')
//add new user
const addUser = async (req, res) => {
    try {
        const { firstName, lastName, number, email } = req.body
        newUser = new User({ firstName, lastName, number, email })
        await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
//show all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
//show one user by id
const getOneUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.status(200).send(user)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}
//edit a user
const editUser = async (req, res) => {
    try {
        const id = req.params.id
        const editedUser = await User.findByIdAndUpdate(id, { ...req.body }, { new: true })
        res.status(200).send(editedUser)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}
//delete a user
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).send(deletedUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = { addUser, getUsers, getOneUser, editUser, deleteUser }