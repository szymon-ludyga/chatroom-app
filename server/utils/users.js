const _ = require('lodash');

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    const user = this.users.filter(user => user.id === id)[0];
    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }
    return user;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUsersList(room) {
    const users = this.users.filter(user => user.room === room);
    return users.map(user => user.name);
  }
}

module.exports = { Users };
