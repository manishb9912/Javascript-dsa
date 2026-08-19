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
        this.tail = newNode;
        this.length = 1;
    }

    print() {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if(!this.head) {
            console.log("Head: null");
        } else {
            console.log("Head: ", this.head.value);
        }
    }

    getTail() {
        if(!this.tail) {
            console.log("Tail: ", null);
        } else {
            console.log("Tail: ", this.tail.value);
        }
    }

    getLength() {
        console.log("Length: ", this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i=0;i < index;i++) {
            temp=temp.next;
        }
        return temp;
    }

    set(index, value) {
       let temp = get(index);
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return undefined;
        let temp = this.head;
        let pre = temp;

        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
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
        if(this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length == 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(8);
myLinkedList.unshift(4);
myLinkedList.print();
myLinkedList.getHead();
myLinkedList.getTail();
console.log(myLinkedList.get(2).value);
console.log(myLinkedList.get(-1).value);