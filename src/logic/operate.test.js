import operate from './operate';

describe('operate', () => {
  test('1 + 1 should return 2', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });

  test('1 - 1 should return 2', () => {
    expect(operate(1, 1, '-')).toBe('0');
  });

  test('2 ÷ 2 should return 2', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });

  test('2 x 2 should return 2', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('3 % 2 should return 1', () => {
    expect(operate(3, 2, '%')).toBe('1');
  });

  test('Should throw an error if a wrong operator is used', () => {
    expect(() => operate(1, 3, 'a')).toThrowError(/Unknown operation/);
  });
});
