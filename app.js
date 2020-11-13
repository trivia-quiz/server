const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const router = require('./routes/index')
const http = require('http').createServer(app)
const io = require('socket.io')(http);

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

let onlineUsers = [];

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('userLogin', (username) => {
        onlineUsers.push(username)
        io.emit('userLogin', onlineUsers)
    })
    socket.on('getPlayers', () => {
        io.emit('getPlayers', onlineUsers)
    })
    socket.on('addScore', (payload) => {
        let data = onlineUsers.map(el => {
            if (el.username === payload.username) {
                el.score = payload.score
            }
            return el
        })
        io.emit('addScore', data)
    })
})

http.listen(port, () => {
    console.log(`Listen to http:localhost:${port}`);
})
