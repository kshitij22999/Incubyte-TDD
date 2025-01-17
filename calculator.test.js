const Calculator = require('./calculator');

describe('String-Based Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator(); // Create a fresh instance before each test
    });

    test('should return 0 for an empty string', () => {
        expect(calc.add('')).toBe(0);
    });

    test('should return the number itself for a single number input', () => {
        expect(calc.add('5')).toBe(5);
    });

    test('should return the sum of two numbers separated by ","', () => {
        expect(calc.add('2,3')).toBe(5);
    });

    test('should return the sum of multiple numbers separated by ","', () => {
        expect(calc.add('1,2,3,4')).toBe(10);
    });

    test('should accept \n as a delimeters', () => {
        expect(calc.add('1\n2\n3')).toBe(6);
    });

    test('should accept \n and , as a delimeters', () => {
        expect(calc.add('1\n2,3')).toBe(6);
    });

    test('should handle custom delimeters', () => {
        expect(calc.add('//;\n1;2')).toBe(3);
    });

    test('should handle custom delimeters', () => {
        expect(calc.add('//*\n10*2')).toBe(12);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => calc.add('-2,3')).toThrow(Error);
    });
});