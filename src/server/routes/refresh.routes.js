const express = require('express')
const route = express.Router()
const auth = require('../middleware/index')

// /app/token/refresh
route.get('/refresh', auth, async (req, res) => {
    try {
        console.log('refresh is working')
        res.status(200).json({message: 'Токен акутальный'})
    } catch (error) {
        res.status(400).json({message: 'Ошибка с токеном'})
        
    }
})

module.exports = route