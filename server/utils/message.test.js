const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message', () => {
    const message = { from: 'hehe', text: 'Costam' };
    const res = generateMessage(message.from, message.text);
    expect(typeof res.createdAt).toBe('string');
    expect(res).toMatchObject({ text: message.text, from: message.from });
  });
});
