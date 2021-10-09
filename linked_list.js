class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    //Display size of linked list
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count += 1;
            node = node.next;
        }
        return count;
    }
    //Adds node
    add(data) {
        let new_node = new ListNode(data);
        new_node.next = this.head;
        this.head = new_node;
    }
    //Give string representation of linked list
    repr() {
        let nodes = [];
        let current = this.head;

        while (current) {
            if (current == this.head) {
                nodes.push("Head: " + current.data);
            } else if (current.next == null) {
                nodes.push("Tail: " + current.data);
            } else {
                nodes.push(current.data);
            }

            current = current.next;
        }
        console.log(nodes.join(" -> "))
    }
    //Finds node
    find(node) {
        let current = this.head;
        while (current) {
            let position = 0;
            console.log(position);
            position += 1;
            if (current.data == node) {
                console.log("Found node at position " + position);
                return true;
            } else {
                current = current.next;
            }

        }
        console.log("Not found");
    }
    //Replaces data at index
    replace(data, index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.data = data;
    }
    //Inserts node at index
    insert(data, index) {
        if (this.size() < index || index < 0) {
            return console.log("Please enter a valid index");
        } else {
            let node = new ListNode(data);
            let curr, prev;

            if (index == 0) {
                this.add(data)
            } else {
                curr = this.head;

                for (let i = 0; i < index; i++) {
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
        }
    }
    //Deletes node at index
    delete(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Please Enter a valid index");
        } else {
            let current = this.head;
            let prev;
            if (index == 0) {
                this.head = current.next
            }
            else{
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            }
        }
    }  
    //Deletes node with choosen value
    deleteElement(element){
        let current = this.head;
        let prev = null;

        while(current!=null){

            if(current.data == element){
                if(prev == null){
                    this.head = current.next;
                }
                else{
                    prev.next = current.next;
                }
                return current.data;
            }
            prev = current;
            current = current.next
        }
        return console.log("Element not found");
    }
    //Adds node at choosen index
        node_at_index(index){
            if(index == 0){
                return this.head;
            }
            else{
                current = this.head;
                position = 0;
                while(position < index){
                    current = current.next;
                    position +=1;
                }
            return current;
            }
        }

    }


//Testing linked list

let node1 = new ListNode(2);
let node2 = new ListNode(5);

node1.next = node2;
let list = new LinkedList(node1);

console.log(list.size());
list.add(3);
list.add(5);
console.log(list.size());

console.log(list);

console.log(list.repr());

console.log(list.find(2));

list.replace(4, 2);

console.log(list.repr());

console.log(list.repr());

console.log(list.insert(2, 3));

console.log(list.repr());

list.delete(0);
console.log(list.repr());

console.log(list.deleteElement(1));

console.log(list.repr());
