class Calculator {
    calculate(input) {
        if (!input) return 0;
        return input.split('+').reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
}

module.exports = Calculator;