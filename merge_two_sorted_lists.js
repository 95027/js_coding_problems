class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

node1 = new ListNode(1);
node2 = new ListNode(2);
node3 = new ListNode(4);

node1.next = node2;
node2.next = node3;

let list1 = node1;

node_a = new ListNode(1);
node_b = new ListNode(3);
node_c = new ListNode(4);

node_a.next = node_b;
node_b.next = node_c;

let list2 = node_a;

var mergeTwoLists = function (list1, list2) {
  let arr = [];

  checkNode(list1);
  checkNode(list2);

  function checkNode(node) {
    if (!node) return;
    arr.push(node.val);
    checkNode(node.next);
  }

  arr = arr.sort((a, b) => a - b);

  let dummy = new ListNode(0);
  let current = dummy;

  arr.forEach((num) => {
    current.next = new ListNode(num);
    current = current.next;
  });
  return dummy.next;
};

console.log(mergeTwoLists(list1, list2));
