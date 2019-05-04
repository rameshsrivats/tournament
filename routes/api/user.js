const express = require('express')
const uuidv4 = require('uuid/v4')

const User = require('../../models/user')
const auth = require('../../middleware/auth')
const genToken = require('../../utils/gen-token')
const validate = require('../../validation/inputs')


const router = new express.Router()

// Route: POST /api/users
// Desc: Registers a new user
// Access: Public
router.post('/', async (req, res) => {
    let errors = {}
    let isValid = true
    let error = ''

    error = validate.email(req.body.email)
    if (error) {
        errors.email = error
        isValid = false
    }
    error = validate.password(req.body.password)
    if (error) {
        errors.password = error
        isValid = false
    }
    if (!isValid) {
        return res.status(400).send(errors)
    } 
    const user = new User(req.body)
    user.handle = req.body.email
    user.handleLower = req.body.email.toLowerCase()
    user.reset = uuidv4()
    try {
        await user.save()
        const token = await genToken(user)
        res.status(201).send({ token })
    } catch (err) {
        if (err.errmsg.includes('duplicate key error')) {
            errors = { email: 'This email has already been taken.'}
            res.status(400).send(errors)
        } else {
            errors = { server: 'Could not connect to server. Please try again later'}
            res.status(500).send(errors)
        }            
    }               
})

// Route: PUT /api/users
// Desc: Logs in a user
// Access: Public
router.put('/', async (req, res) => {
    let errors = {}
    let isValid = true
    let error = ''

    error = validate.email(req.body.email)
    if (error) {
        errors.email = error
        isValid = false
    }
    error = validate.password(req.body.password)
    if (error) {
        errors.password = 'Invalid password'
        isValid = false
    }
    if (!isValid) {
        return res.status(400).send(errors)
    }

    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            errors.email = 'User not found'
            return res.status(404).send(errors)
        }

        const isMatch = await User.validatePassword(user._id, req.body.password)
        if (!isMatch) {
            errors.password = 'Invalid password'
            return res.status(400).send(errors)
        }

        const token = genToken(user)
        res.send({ token })
    } catch (errors) {
            res.status(500).send({server: errors})          
    }               
})


// Route: GET /api/users
// Desc: Validates token, generates new token and returns user details
// Access: Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.uid)
        if (!user) {
            const errors = { user: 'User not found' }
            res.status(404).send(errors)            
        } else {
            const token = genToken(user)
            res.send({ token })
        }
    } catch (err) {
        const errors = { server: 'Could not connect to server. Please try again later'}
        res.status(500).send(errors)
    }
})

// Route: PATCH /api/users/handle
// Desc: Changes the handle of a user
// Access: Private
router.patch('/handle', auth, async (req, res) => {
    const error = validate.handle(req.body.handle)
    if (error) {
        const errors = { handle: error}
        return res.status(400).send(errors)
    }
    try {
        const dupe = await User.findOne({ handleLower: req.body.handle.toLowerCase() })
        if (dupe) {
            if (dupe._id.toString() === req.uid) {
                const token = await genToken(dupe)
                res.status(201).send({ token })
            }
            const errors = { handle: 'Username already taken' }
            return res.status(400).send(errors)
        } 
        const user = await User.findById(req.uid)
        user.handle = req.body.handle
        user.handleLower = req.body.handle.toLowerCase()
        await user.save()
        const token = await genToken(user)
        res.status(201).send({ token })
    } catch (err) {
        const errors = { server: 'Could not connect to server. Please try again later'}
        res.status(500).send(errors)
    }
})

// Route: PUT /api/users/email
// Desc: Verifies email and emails a reset password link
// Access: Public
router.put('/email', async (req, res) => {
    let errors = {}
    let isValid = true
    let error = ''

    error = validate.email(req.body.email)
    if (error) {
        errors.email = error
        isValid = false
    }
    if (!isValid) {
        return res.status(400).send(errors)
    }
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            errors.email = 'User not found'
            return res.status(404).send(errors)
        }
        const code = user.reset
        // Need to change code below to instead send email with reset link
        res.send({ code })
    } catch (errors) {
            res.status(500).send({server: errors})          
    }               
})

// Route: PATCH /api/users/password
// Desc: Changes the password of a user
// Access: Private
router.patch('/password', auth, async (req, res) => {
    const error = validate.password(req.body.password)
    if (error) {
        const errors = { password: error}
        return res.status(400).send(errors)
    }
    try {
        const user = await User.findById(req.uid)
        user.password = req.body.password
        await user.save()
        res.status(201).send()
    } catch (err) {
        const errors = { server: 'Could not connect to server. Please try again later'}
        res.status(500).send(errors)
    }
})

// Route: POST /api/users/password
// Desc: Resets the password of a user given code
// Access: Public
router.post('/password', async (req, res) => {
    const error = validate.password(req.body.password)
    if (error) {
        const errors = { password: error}
        return res.status(400).send(errors)
    }
    try {
        const user = await User.findOne({ reset: req.body.code })
        if (!user) {
            const errors = { code: 'Invalid' }
            return res.status(401).send(errors)
        }
        user.password = req.body.password
        user.reset = uuidv4()
        await user.save()
        res.status(201).send()
    } catch (err) {
        const errors = { server: 'Could not connect to server. Please try again later'}
        res.status(500).send(errors)
    }
})







module.exports = router