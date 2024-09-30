class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
    this.isLast = false;
  }
}

class CircularList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(name) {
    const node = new Node(name);
    if (!this.head) this.head = node;
    else {
      this.tail.next = node;
      this.tail.isLast = false;
    }

    this.tail = node;
    this.tail.next = this.head;
    this.tail.isLast = true;
  }

  flatten() {
    let current = this.head;
    while (current) {
      console.log({ current });
      current = current.isLast ? null : current.next;
    }
  }
}

const circularList = new CircularList();
circularList.add("1");
circularList.add("2");
circularList.add("3");
circularList.add("4");
circularList.flatten();
