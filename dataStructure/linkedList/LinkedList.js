class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let temp =this.head;
        let pre = this.head;
        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length == 0) {
            this.tail = null;
        }
        return temp;
    }
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
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
}

const myLinkedList = new LinkedList(10);
console.log("----- Linked List -----");
console.log(myLinkedList);
console.log("----- Push 7,9 -----");
myLinkedList.push(7);
myLinkedList.push(9);
console.log(myLinkedList);
console.log("----- Pop -----");
myLinkedList.pop()
console.log(myLinkedList);
console.log("----- Unshift 4 -----");
myLinkedList.unshift(4)
console.log(myLinkedList);
console.log("----- Shift -----");
myLinkedList.shift()
console.log(myLinkedList);
console.log("----- Get method -----");
myLinkedList.get(2)
console.log(myLinkedList.get(1));
console.log(myLinkedList);
console.log("----- Set method -----");
myLinkedList.set(1, 5)
console.log(myLinkedList);