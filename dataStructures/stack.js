class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let node = new Node(val)
        if(this.siye === 0){
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return this.size++;

    }
}