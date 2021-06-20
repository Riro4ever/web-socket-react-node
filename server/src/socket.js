require("dotenv").config({ path: "./.env" });

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});
let messages = [];
app.use(express.static(path.resolve(__dirname, "..", 'public')));
app.use(express.json);
app.use(cors());

io.on('connection', (socket) => {
    socket.on('message', message => {
        // messages.push(message);
        // console.log(messages);
        io.sockets.emit('received', message);
    })
})

server.listen(process.env.PORT, () =>{
    console.log(`☁ Back-end started on port ${process.env.PORT}`);
});