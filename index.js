const express = require('express')
const mongoose = require('mongoose')
const WebSocket = require('ws')
const app = express()
const http = require('http')

const server = http.createServer(app)
const webSocketServer = new WebSocket.Server({server})

app.use(express.json({extented: true}))

app.use('/*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, authorization");
    next();
  });
  
app.use('/app/token', require('./src/server/routes/refresh.routes'))

app.use('/app/auth', require('./src/server/routes/auth.routes'))

app.use('/app/todo', require('./src/server/routes/taskList.routes'))

function setWebsocket() {
    

}

setWebsocket()
webSocketServer.on('connection', socket => {
    console.log('connected new socket')
    console.log(`this is socket ${socket} with socket id ${socket.id}`)
})

async function start() {
    try {
        'mongodb+srv://Grisha:<password>@cluster0.zrczy.mongodb.net/<dbname>?retryWrites=true&w=majority'
        //await mongoose.connect('mongodb+srv://Grisha:123456Aa@cluster0.f4mbl.azure.mongodb.net/portfolio?retryWrites=true&w=majority', {
        await mongoose.connect('mongodb+srv://Grisha:123456Aa@cluster0.zrczy.mongodb.net/<dbname>?retryWrites=true&w=majority', {
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
