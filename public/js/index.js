const socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected');
});

socket.on('newMessage', function(message) {
  console.log(message);
});