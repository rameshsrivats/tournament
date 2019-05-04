const Validator = require('validator')

const email = (email) => {
    let error = ''

    // Check if email is present
    if (!email || email === '') {
        error = 'Please provide an email'
        return error
    }

    // Check if email is in the correct format
    if (!Validator.isEmail(email)) {
        error = 'Please provide a valid email'
        return error
    }

    return error
}

const password = (password) => {
    let error = ''
    
    // Check if password is present
    if (!password || password === '') {
        error = 'Please provide a password'
        return error
    }

    // Check if password length is at least 8
    if (password.length < 8) {
        error = 'Password should be at least 8 characters'
        return error
    }

    return error
}

const handle = (handle) => {
    let error = ''

    // Check if handle is present
    if (!handle || handle === '') {
        error = 'Please provide a username'
        return error
    }

    // Check if handle is at least 5 chars
    if (handle.length < 5) {
        error = 'Username has to be at least 5 characters'
        return error
    }

    // Check if handle is less than 25 characters
    if (handle.length > 25) {
        error = 'Username can be a maximum of 25 characters'
        return error
    }

    // Check if handle contains illegal characters
    const handleRegex = RegExp('^[A-Za-z0-9_\-]+$')
    const isValidPattern = handleRegex.test(handle)
    if (!isValidPattern) {
        error = 'Username can contain only letters, numbers, underscores and dash'
        return error
    }

    return error
}

module.exports = {
    email,
    password,
    handle
}