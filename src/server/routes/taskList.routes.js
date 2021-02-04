const express = require('express')
const router = express.Router()
const auth = require('../middleware/index')
const Task = require('../models/Task')


// /app/todo

router.get('/tasks', auth, async (req, res) => {
    console.log(req.user.userId)
    console.log('task request is woking')
    
    const tasks = await Task.find({owner: req.user.userId})
    console.log(tasks)
    if (tasks) {
        console.log('tasks are ok')
    }

    res.status(201).json({tasks})
})

router.post('/create', auth, async (req, res) => {
    try {
        /*console.log('request body update list: ')
        console.log(req.body)
        
        console.log('title: ', title)
        console.log('completed: ', completed)*/

        const { title, completed } = req.body
        
        const newTask = new Task({
            title, completed, owner: req.user.userId
        })

        await newTask.save()

        return res.status(200).json({newTask, taskId: newTask._id})

    } catch (error) {
        console.log(error)
        return status(400).json({message: 'Сохранение изменений в БД не выполнена'})
    }
})

router.post('/delete', auth, async (req, res) => {
    try {
        const {taskId} = req.body

        await Task.deleteOne({_id: taskId}, (err) => {
            if (err) {
                return res.status(400).json({message: 'Сохранение изменений в БД не выполнена'})
            }
        })

        return res.status(200).json({message: 'Пост успешно удален из БД'})
        
    } catch (error) {
        console.log(error)
        return status(400).json({message: 'Сохранение измненений в БД не выполнена'})
    }
})

router.post('/change', auth, (res, req) => {
    try {
        
    } catch (error) {
        console.log(error)
        return status(400).json({message: 'Сохранение измненений в БД не выполнена'})
    }
})

module.exports = router
