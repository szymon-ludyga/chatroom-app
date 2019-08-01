const socket = io();

function scrollToBottom() {
  const messages = jQuery('#messages');
  const newMessage = messages.children('li:last-child');

  const clientHeight = messages.prop('clientHeight');
  const scrollTop = messages.prop('scrollTop');
  const scrollHeight = messages.prop('scrollHeight');
  const newMessageHeight = newMessage.innerHeight();
  const lastMessageHeight = newMessage.prev().innerHeight();

  if (
    clientHeight + scrollTop + newMessageHeight + lastMessageHeight >=
    scrollHeight
  ) {
    messages.scrollTop(scrollHeight);
  }
}

socket.on('connect', function() {
  const params = jQuery.deparam(window.location.search);

  socket.emit('join', params, function(err) {
    if (err) {
      alert(err);
      window.location.href = '/';
    } else {
      console.log('No error');
    }
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected');
});

socket.on('update-user-list', function(usersArr) {
  let ul = jQuery('<ul></ul>');

  usersArr.forEach(user => {
    ul.append(jQuery('<li></li>').text(user));
  });

  jQuery('#users').html(ul);
});

socket.on('newMessage', function(message) {
  console.log(message);
  let li = jQuery('<li></li>');
  li.text(`${message.from} ${message.createdAt}: ${message.text}`);

  jQuery('#messages').append(li);
  scrollToBottom();
});

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit(
    'createMessage',
    {
      from: 'User',
      text: jQuery('[name=message]').val()
    },
    function() {
      jQuery('[name=message]').val('');
    }
  );
});
