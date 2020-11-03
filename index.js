const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json({extented: true}))

app.use('/api/auth', require('./src/server/routes/auth.routes'))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Grisha:123456Aa@cluster0.f4mbl.azure.mongodb.net/portfolio?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })

    app.listen(3000, () => console.log('server has been started...'))
    
    } catch (error) {
        console.log('error: ', error.message)
        console.log('Непредвиденная ошибка')
    }
    
}
start()
