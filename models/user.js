const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    handle: {
        type: String,
        trim: true,
        default: ''
    },
    handleLower: {
        type: String,
        trim: true,
        default: ''
    },
    role: {
        type: String,
        default: 'user'
    },
    reset: {
        type: String,
        default: ''
    }
})

// Hash the password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
})

// Validate a user's password
userSchema.statics.validatePassword = async (id, password) => {
    const user = await User.findById(id)
    if (!user) {
        throw new Error({ failure: 'Unable to connect. Please try later'})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    return isMatch
}

// Control what data is passed back to client in user object
userSchema.methods.toJSON = function () {
    const userObject = this.toObject()
    delete userObject.email
    delete userObject.password
    delete userObject.handleLower
    delete userObject.reset

    return userObject
}

const User = new mongoose.model('User', userSchema)

module.exports = User