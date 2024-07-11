const logger = require('../utils/logger')

const unknownEndpoint = (req, res, next) => {
    res.status(404).json({error: 'unreachable endpoint'})
    next()
}

const handleError = (error, req, res, next) => {
    logger.error(error.message)

    if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
        return res.status(409).json({ error: 'the username must be unique' })
    } else {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = { handleError, unknownEndpoint }
