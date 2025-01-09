class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const temp = new Node(value);
    this.head = temp;
    this.length = 1;
  }

  // Traverse
  traverse() {
    let s = "";
    let temp = this.head;
    while (temp) {
      s += `${temp.data} -> `;
      temp = temp.next;
    }
    s += "null";
    console.log(s);
  }

  // Insert at beginning (Unshift)
  unshift(value) {
    const temp = new Node(value);

    if (!this.head) {
      this.head = temp;
      this.length = 1;
      return this;
    }

    temp.next = this.head;
    this.head = temp;
    this.length++;
  }

  // delete from end (Pop)
  pop() {
    // empty list
    if (!this.head) return;
    // Only one node
    if (this.head.next === null) {
      this.head = null;
      this.length = 0;
      return;
    }

    let temp = this.head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
    this.length--;
  }

  // Insert at end (Push)
  push(value) {
    const new_node = new Node(value);
    // empty list
    if (!this.head) {
      this.head = new_node;
      this.length = 1;
      return;
    }

    let temp = this.head;
    while (temp.next) temp = temp.next;
    temp.next = new_node;
    this.length++;
  }

  // delete from start (shift)
  shift() {
    if (!this.head) return;
    if (this.head.next === null) {
      this.head = null;
      this.length = 0;
      return this;
    }

    const temp = this.head;

    this.head = this.head.next;
    this.length--;

    // delete temp;
    temp.next = null;
    return;
  }
}

const list = new LinkedList(1);
list.unshift(2);
list.unshift(3);
list.traverse();
list.pop();
list.traverse();
list.push(5);
list.push(7);
list.traverse();
list.shift();
list.traverse();
