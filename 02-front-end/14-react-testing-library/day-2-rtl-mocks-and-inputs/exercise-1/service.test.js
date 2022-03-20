const service = require('./service');

describe('The function randomNumber', () => {
  it('tests if the function was called, what is its return and how many times it was called', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})

describe('Different implementations of the function randomNumber', () => {
  it('tests if the mocked function was called, how many times it was called and if it receives two parameters and returns their division', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((number1, number2) => number1 / number2);

    expect(service.randomNumber(20, 10)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(20, 10);
  })

  it('tests if the mocked function was called, how many times it was called and if it receives three parameters and returns their multiplication', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((number1, number2, number3) => number1 * number2 * number3);

    expect(service.randomNumber(20, 10, 5)).toBe(1000);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(20, 10, 5);
  })

  it('tests if the mocked function was called, how many times it was called and if it receives one parameter and returns its double', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((number) => number * 2);

    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10);
  })
})

describe('Different implementation of the function toUpperCase', () => {
  it('tests if the mocked function was called, how many times it was called and if it returns a lower case string', () => {
    service.toUpperCase = jest.fn().mockImplementationOnce((string) => string.toLowerCase());

    expect(service.toUpperCase('OI')).toBe('oi');
    expect(service.toUpperCase).toHaveBeenCalled();
    expect(service.toUpperCase).toHaveBeenCalledTimes(1);
    expect(service.toUpperCase).toHaveBeenCalledWith('OI');
  })
})

describe('Different implementation of the function firstLetter', () => {
  it('tests if the mocked function was called, how many times it was called and if it returns the last letter of a string', () => {
    service.firstLetter = jest.fn().mockImplementationOnce((string) => {
      const stringLength = string.length;
      return string.split('')[stringLength - 1];
    })
  })
})