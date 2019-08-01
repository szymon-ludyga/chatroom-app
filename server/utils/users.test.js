const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let usersInstance;

  beforeEach(() => {
    usersInstance = new Users();
    usersInstance.users = [
      {
        id: '1',
        name: 'Elo',
        room: 'Copenhagen'
      },
      {
        id: '2',
        name: 'Elo2',
        room: 'Oslo'
      },
      {
        id: '3',
        name: 'Elo3',
        room: 'Oslo'
      }
    ];
  });

  it('should add new user', () => {
    const usersInstance = new Users();
    const user = {
      id: '123',
      name: 'Szymon',
      room: 'Berlin'
    };
    const resUser = usersInstance.addUser(user.id, user.name, user.room);

    expect(usersInstance.users).toEqual([user]);
  });

  it('should remove user by id', () => {
    const user = usersInstance.removeUser('1');

    expect(user.id).toBe('1');
    expect(usersInstance.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const user = usersInstance.removeUser('99');

    expect(user).toBeFalsy();
    expect(usersInstance.users.length).toBe(3);
  });

  it('should get user by id', () => {
    const user = usersInstance.getUser('1');

    expect(user.name).toEqual('Elo');
  });

  it('should not get user', () => {
    const user = usersInstance.getUser('99');

    expect(user).toBeFalsy();
  });

  it('should return users in Oslo room', () => {
    const userList = usersInstance.getUsersList('Oslo');

    expect(userList).toEqual(['Elo2', 'Elo3']);
  });
});
