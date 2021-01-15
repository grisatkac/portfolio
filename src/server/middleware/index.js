const jwt = require('jsonwebtoken')
//const config = require('../../config/default')

module.exports = ( async (req, res, next) => {
    

    try {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({message:'Нет авторизации'})
        }

        const decoded = jwt.verify(token, 'pistapool key')

        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message: 'Авторизация не выполнена'})
    }
})
