loginRouter = require('express').Router()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    const validatePassword = user === null
        ? false
        : await bcrypt.compare(password, user.password)

    if (!validatePassword) {
        return res.status(401).json({ error: 'invalid username or password' })
    }

    const token = jwt.sign({ username, password, userid: user.id }, process.env.SECRET)

    res.status(200).json({ token })
})

module.exports = loginRouter