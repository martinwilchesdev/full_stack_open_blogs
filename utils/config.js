process.loadEnvFile()

const MONGODB_URL = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001

module.exports = { MONGODB_URL, PORT }