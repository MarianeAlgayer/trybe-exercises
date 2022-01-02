const sum = require('./sum')

describe('The function sum()', () => {

  it('Adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0).toBe(0));
  });

  it('Throws an error when the parameter is a string', () => {
    expect(sum(4, '5')).toThrowError();
  })

  it('Shows the message "parameters must be numbers" when throws an error', () => {
    expect(sum(4, '5')).toThrowError('parameters must be numbers');
  })
});
