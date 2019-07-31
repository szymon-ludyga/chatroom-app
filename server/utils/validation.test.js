const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const name = 2131;
    const val = isRealString(name);
    expect(val).toBeFalsy();
  });

  it('should reject spaces', () => {
    const name = '      ';
    const val = isRealString(name);
    expect(val).toBeFalsy();
  });

  it('should allow string', () => {
    const name = '   dasdasdas   ';
    const val = isRealString(name);
    expect(val).toBeTruthy();
  });
});
