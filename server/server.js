const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '..', 'public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');

  //socket.emit - emits event to single connection
  socket.emit('newEmail', {
    text: 'elooooo'
  });

  socket.on('createMessage', message => {
    console.log('createMessage', message);
    //io.emit - emits event to every connection
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`
    });
  });

  socket.on('disconnect', socket => {
    console.log('Client disconnected...');
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Listen on port: ' + port);
});
