function calc(expression) {
    const tokens = expression.split(' ');
    const stack = [];

    // Function to apply operator to two operands
    function applyOperator(operator, operand1, operand2) {
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            default:
                throw new Error('Invalid operator');
        }
    }

    // Iterate through tokens from right to left
    for (let i = tokens.length - 1; i >= 0; i--) {
        const token = tokens[i];
        if (!isNaN(parseFloat(token))) {
            // Token is an operand, push it onto the stack
            stack.push(token);
        } else {
            // Token is an operator, apply it to operands from the stack
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const result = applyOperator(token, operand1, operand2);
            stack.push(result);
        }
    }

    // Result is the only item left on the stack
    return stack.pop();
}

// Example usage:
console.log(calc("+ 1 2"));         // Output: 3
console.log(calc("* 2 + 1 2"));     // Output: 6
console.log(calc("+ 9 * 2 3"));     // Output: 15
console.log(calc("- 1 2"));         // Output: -1
console.log(calc("- 9 * 2 3"));     // Output: 3
console.log(calc("/ 6 - 4 2"));     // Output: 3
