class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head; // Make it circular
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.size++;
    }

    removeAfter(node) {
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return node;
        }
        const removedNode = node.next;
        node.next = node.next.next;
        if (removedNode === this.head) {
            this.head = node.next;
        }
        this.size--;
        return removedNode;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current && count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    findSurvivor(skip) {
        let current = this.head; // Start counting from the head node
        while (this.size > 1) {
            for (let i = 1; i < skip - 1; i++) { // Move to the person before the one to be removed
                current = current.next;
            }
            this.removeAfter(current);
            current = current.next; // Move to the next person to be counted
        }
        return this.head.value;
    }
}

function findSurvivor(people, skip) {
    const linkedList = new CircularLinkedList();
    for (let i = 1; i <= people; i++) {
        linkedList.append(i);
    }
    return linkedList.findSurvivor(skip);
}

// Example usage:
console.log(findSurvivor(10, 3)); // Output: 4
