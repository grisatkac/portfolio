const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')


// /app/auth/login
router.post('/login', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({message: 'Ошибка при входе, попробуйте еще раз'})
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'Ошибка при входе, пользователя с такой почтойне существует'})
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: 'Серверная ошибка при входе в аккаунт'})
    }
})
// /app/auth/registr
router.post('/registr', async (req,res) => {
    try {
        if (!req.body) {
            return res.status(400).json({message: 'Ошибка при регистрации, попробуйте еще раз'})
        }

        const {email, password} = req.body

        const user = User.findOne({email})

        if (user) {
            return res.status(400).json({message: 'Ошибка при регистрации: пользователь с такой почтой уже сущестует'})
        }

        const newUser = new User({
            email, 
            password
        })
        
        newUser.save()

        return res.status(200).json({message: 'Пользователь успешно создан'})

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: 'Серверная ошибка при регистрации'})
    }
})

module.exports = router
