class LinkedList {
  constructor(val, next = null) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new LinkedList(1);
let node2 = new LinkedList(2);
let node3 = new LinkedList(3);
let node4 = new LinkedList(4);
let node5 = new LinkedList(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let head = node1;
let val = [];

function reverseLinkedList(node) {
  checkNode(node);

  let dummy = new LinkedList(0);
  let current = dummy;

  for (let i = 0; i < val.length; i++) {
    current.next = new LinkedList(val[i]);
    current = current.next;
  }
  return dummy.next;

  function checkNode(node) {
    if (!node) return;
    val.unshift(node.val);
    checkNode(node.next);
  }
}

console.log(reverseLinkedList(head));
