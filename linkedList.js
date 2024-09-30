class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(name) {
    const newNode = new Node(name);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  flatten() {
    let current = this.head;
    while (current) {
      console.log(current.name);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.add("node1");
list.add("node2");
list.add("node3");
list.add("node4");
list.flatten();
