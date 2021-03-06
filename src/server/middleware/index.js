const jwt = require('jsonwebtoken')
//const config = require('../../config/default')

module.exports = ( async (req, res, next) => {
    try {
        const token = req.headers.authorization
        //const token = req.headers.Cookie
        if (!token) {
            return res.status(401).json({message:'Нет авторизации'})
        }

        const decoded = await jwt.verify(token, 'pistapool key')
        
        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message: 'Авторизация не выполнена'})
    }
})
