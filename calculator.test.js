const Calculator = require('./calculator');

describe('String-Based Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator(); // Create a fresh instance before each test
    });

    test('should return 0 for an empty string', () => {
        expect(calc.calculate('')).toBe(0);
    });

    test('should return the number itself for a single number input', () => {
        expect(calc.calculate('5')).toBe(5);
    });

    test('should return the sum of two numbers separated by "+"', () => {
        expect(calc.calculate('2+3')).toBe(5);
    });

    test('should return the sum of multiple numbers separated by "+"', () => {
        expect(calc.calculate('1+2+3')).toBe(6);
    });
});
