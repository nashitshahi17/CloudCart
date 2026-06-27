const bcrypt = require('bcryptjs')

async function hashPassword(password){
    const SALT = Number(process.env.BCRYPT_SALT_ROUNDS) || 10
    return await bcrypt.hash(password,SALT)
}

async function comparePasswords(plainPassword,hashedPassword) {
    return await bcrypt.compare(plainPassword,hashedPassword)
}

module.exports = {
    hashPassword,
    comparePasswords
}