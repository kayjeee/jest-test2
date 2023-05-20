/* eslint-disable class-methods-use-this */
import { reverseString } from './reverseString.js';

describe('reverseString', () => {
  it('should reverse the string', () => {
    const inputStr = 'Hello, World!';
    const expectedOutput = '!dlroW ,olleH';

    expect(reverseString(inputStr)).toBe(expectedOutput);
  });
});

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(calculator.add(-5, -10)).toBe(-15);
    });

    it('should add zero to a number', () => {
      expect(calculator.add(7, 0)).toBe(7);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(calculator.subtract(10, 5)).toBe(5);
    });

    it('should subtract negative numbers', () => {
      expect(calculator.subtract(-7, -3)).toBe(-4);
    });

    it('should subtract zero from a number', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrowError('Cannot divide by zero');
    });

    it('should divide negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(calculator.multiply(5, 4)).toBe(20);
    });

    it('should multiply a number by zero', () => {
      expect(calculator.multiply(7, 0)).toBe(0);
    });

    it('should multiply negative numbers', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });
  });
});
