class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if(index < this.length/2) {
            for(let i = 0; i < index ; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for(let i = this.length - 1; i > index ; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return undefined;
        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(this.length === 0) return null;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

const myDoubleLinkedlist = new DoubleLinkedList(1);
myDoubleLinkedlist.push(2);
myDoubleLinkedlist.push(3);
myDoubleLinkedlist.push(4);
console.log(myDoubleLinkedlist.printList());
myDoubleLinkedlist.set(0, 8);
console.log(myDoubleLinkedlist.printList());