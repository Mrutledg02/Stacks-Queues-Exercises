class Stack {
    constructor() {
      this._array = [];
    }
  
    push(val) {
      this._array.push(val);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this._array.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this._array[this._array.length - 1];
    }
  
    isEmpty() {
      return this._array.length === 0;
    }
  
    get size() {
      return this._array.length;
    }
  }
  
  module.exports = Stack;  