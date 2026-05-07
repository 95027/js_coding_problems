// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// let head = node1;

// function printList(head) {
//   log(head);

//   function log(node) {
//     if (!node) return;
//     console.log(node.val);
//     log(node.next);
//   }
// }

// // printList(head);

// function countNodes(head) {
//   let num = 0;

//   count(head);

//   function count(node) {
//     if (!node) return;
//     num++;
//     count(node.next);
//   }

//   return num;
// }

// // console.log(countNodes(head));

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let a1 = new ListNode(2);
let a2 = new ListNode(4);
let a3 = new ListNode(3);

a1.next = a2;
a2.next = a3;

let b1 = new ListNode(5);
let b2 = new ListNode(6);
let b3 = new ListNode(4);

b1.next = b2;
b2.next = b3;

function addTwoNumbers(l1, l2) {
  let arr1 = [];
  let arr2 = [];

  checkNode(l1, arr1);
  checkNode(l2, arr2);

  function checkNode(node, arr) {
    if (!node) return;
    arr.push(node.val);
    checkNode(node.next, arr);
  }
  arr1 = +arr1.reverse().join("");
  arr2 = +arr2.reverse().join("");
  const sum = (arr1 + arr2).toString().split("").reverse().map(Number);

  class LinkedList {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  let dummy = new LinkedList(0);
  let current = dummy;

  sum.forEach((n) => {
    current.next = new LinkedList(n);
    current = current.next;
  });

  return dummy;
}

console.log(addTwoNumbers(a1, b1));
