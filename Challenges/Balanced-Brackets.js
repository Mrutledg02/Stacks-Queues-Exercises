function isBalanced(str) {
    const stack = [];
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const topBracket = stack.pop();
            if (topBracket !== bracketPairs[char]) {
                return false; // Mismatched brackets
            }
        }
    }
    
    return stack.length === 0; // Check if all brackets are closed
}

// Example usage:
console.log(isBalanced("(hi) [there]")); // true
console.log(isBalanced("(hello")); // false
console.log(isBalanced("(nope]")); // false
console.log(isBalanced("((ok) [nope)]")); // false
