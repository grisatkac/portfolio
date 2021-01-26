const express = require('express')
const router = express.Router()
const auth = require('../middleware/index')
const Task = require('../models/Task')
const User = require('../models/User')

// /app/todo/tasks

router.get('/tasks', auth, async (req, res) => {
    console.log(req.user.userId)

    const tasks = Task.find({owner: req.user.userId})
    
    if (tasks) {
        console.log('tasks are ok')
    }

    res.status(201).json({tasks})
     


})

router.post('/update', async (req, res) => {
    console.log('update request is working')
    return res.status(200).json({message: 'Запрос прошел успешно'})
})

module.exports = router
