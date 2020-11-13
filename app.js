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

io.on('connection', (socket) => {
    console.log('a user connected');
})

http.listen(port, () => {
    console.log(`Listen to http:localhost:${port}`);
})

// app.listen(port, () => {
//     console.log(`Listen to http:localhost:${port}`);
// })