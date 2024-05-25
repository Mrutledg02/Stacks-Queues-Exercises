function reverseString(str) {
    let reversedStr = '';
    
    // Iterate through each character of the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        // Add the current character to the reversed string
        reversedStr += str.charAt(i);
    }
    
    return reversedStr;
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"