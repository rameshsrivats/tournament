const mongoose = require('mongoose')

const userstatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    points: {
        type: Number,
        default: 0 
    },
    rank: {
        type: Number,
        default: 0 
    },
    subs: {
        type: Number,
        default: -1
    }
})

const UserStat = new mongoose.model('User', userstatSchema)

module.exports = UserStat