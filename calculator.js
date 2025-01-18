class Calculator {
    add(input) {
        if (!input) return 0;
        let numbers = [];
        if (input.slice(0,2) == '//'){
            numbers = input
                .slice(4)
                .split(input[2])
        }
        else{
            numbers =  input.split(/,|\n/)
        }

        const negativeNumbers = numbers.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
        }

        return numbers
            .map(num => parseInt(num.trim(), 10))
            .filter(num => !isNaN(num))
            .reduce((sum, num) => sum + num, 0);
    }

    multiply(input) {
        if (!input) return 0;
        let numbers = [];
        if (input.slice(0,2) == '//'){
            numbers = input
                .slice(4)
                .split(input[2])
        }
        else{
            numbers =  input.split(/,|\n/)
        }

        const negativeNumbers = numbers.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
        }

        return numbers
            .map(num => parseInt(num.trim(), 10))
            .filter(num => !isNaN(num))
            .reduce((multiply, num) => multiply * num);
    }

    subtract(input) {
        if (!input) return 0;
        let numbers = [];
        if (input.slice(0,2) == '//'){
            numbers = input
                .slice(4)
                .split(input[2])
        }
        else{
            numbers =  input.split(/,|\n/)
        }

        const negativeNumbers = numbers.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
        }

        return numbers
            .map(num => parseInt(num.trim(), 10))
            .filter(num => !isNaN(num))
            .reduce((sum, num) => sum - num);
    }
}

module.exports = Calculator;