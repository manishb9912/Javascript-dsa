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

    insert(index, value) {
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;
        const newNode = new Node(value);
        let before = this.get(index - 1);
        let after = before.next;
        before.next = newNode;
        newNode.next = after;
        newNode.prev = before;
        after.prev = newNode;
        this.length++
        return true;
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.get(index);
        temp.next.prev = temp.prev;
        temp.prev.next = temp.next;
        temp.next = null;
        temp.prev = null;
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
myDoubleLinkedlist.insert(1,10);
console.log(myDoubleLinkedlist.printList());
console.log(myDoubleLinkedlist.remove(2));
console.log(myDoubleLinkedlist.printList());