class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    addLast(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    removeFirst() {
      if (!this.head) {
        throw new Error("List is empty");
      }
      const removedNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return removedNode.val;
    }
  
    addFirst(val) {
        const newNode = new Node(val);
        if (!this.head) {
          this.addLast(val); // Utilize addLast() for adding to the front
        } else {
          newNode.next = this.head;
          this.head = newNode;
          this.size++;
        }
      }
  
    isEmpty() {
      return this.size === 0;
    }
  
    peekFirst() {
      if (!this.head) {
        throw new Error("List is empty");
      }
      return this.head.val;
    }
  }
  
  module.exports = LinkedList;
  