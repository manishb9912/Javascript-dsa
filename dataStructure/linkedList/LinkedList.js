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
        return true;
    }

    pop() {
        if(!this.head) {
            return null;
        }
        let temp = this.head;
        let pre = temp;

        while(temp.next != null) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        return temp;
    }
        print() {
            let temp = this.head;
            while(temp.next != null) {
                console.log(temp);
                temp = temp.next;
            }
        }
    }

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(8);
myLinkedList.pop();
myLinkedList.print();