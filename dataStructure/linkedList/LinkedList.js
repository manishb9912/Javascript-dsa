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
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
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

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(value);
        if(index === 0) return this.unshift(value);
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        const before = this.get(index - 1);
        const temp = this.get(index);

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i=0;i<this.length;i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

function test() {
    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.print();
    console.log("Get index 2: value ", myLinkedList.get(2).value);
    console.log("Set 8 at index 2: ", myLinkedList.set(2, 8));
    // console.log("LL before reverse():");
    myLinkedList.print();
    console.log("Insert 10 at index 4: ", myLinkedList.insert(4, 10));
    console.log(myLinkedList.remove(4))
    //myLinkedList.reverse();

    // console.log("\nLL after reverse():");
    myLinkedList.print();
    console.log(myLinkedList.reverse())
}


test();