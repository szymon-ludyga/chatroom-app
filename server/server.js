const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '..', 'public');
const { generateMessage } = require('./utils/message');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');

  //socket.emit - emits event to single connection
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

  //socket.broadcast.emit - emits event to every connection but the socket itself
  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'New user joined')
  );

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    //io.emit - emits event to every connection
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('disconnect', socket => {
    console.log('Client disconnected...');
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Listen on port: ' + port);
});
