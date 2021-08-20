import calculate, { isNumber } from './calculate';


describe('isNumber', () => {
  test('Should return true if the input value is a number', () => {
    expect(isNumber('2')).toBeTruthy;
  });
  test('Should return false if the input value is a character or text', () => {
    expect(isNumber('abc')).toBeFalsy();
  });
});

describe('calculate', () => {
  test('Should return an object', () => {
    expect(typeof calculate({}, '1')).toBe('object');
  });

  test('Returned object next value should be 1', () => {
    const result = calculate({}, '1');
    expect(result.next).toBe('1');
  });

  test('Returned object next value should be 11', () => {
    const result = calculate({next: '1'}, '1');
    expect(result.next).toBe('11');
  });

  test('Returned object operation value should be 1', () => {
    const result = calculate({}, '+');
    expect(result.operation).toBe('+');
  });

  test('Returned object total value should be 2', () => {
    const result = calculate({next: '1', total: '1', operation: '+'}, '=');
    expect(result.total).toBe('2');
  });
});