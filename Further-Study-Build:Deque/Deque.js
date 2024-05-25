class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
}

 /** addFirst(val): add a new value to the front of the deque */
 addFirst(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  /** addLast(val): add a new value to the back of the deque */
  addLast(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /** removeFirst(): remove the node from the front of the deque
   *  and return its value. Should throw an error if the deque is empty.
   */
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }
    const removedNode = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;
    return removedNode.val;
  }

  /** removeLast(): remove the node from the back of the deque
   *  and return its value. Should throw an error if the deque is empty.
   */
  removeLast() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }
    const removedNode = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
    return removedNode.val;
  }

  /** peekFirst(): return the value of the first node in the deque */
  peekFirst() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }
    return this.head.val;
  }

  /** peekLast(): return the value of the last node in the deque */
  peekLast() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }
    return this.tail.val;
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Deque;