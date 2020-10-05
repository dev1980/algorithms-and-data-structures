// Singly Linked List Node
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}


// Singly Linked List
function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

// Base: Empty
SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
}

// Insert
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
      this.head = new SinglyLinkedListNode(value);
  } else {
      var temp = this.head;
      this.head = new SinglyLinkedListNode(value);
      this.head.next = temp;
  }
  this.size++;
}

// Log
SinglyLinkedList.prototype.log = function () {
  var head = this.head.data;
  var next1 = this.head.next.data;
  var next2 = this.head.next.next.data;
  var next3 = this.head.next.next.next;
  return {
      Tree: this.head,
      Result: head + " -> " + next1 + " -> " + next2 + " -> " + next3
  };
}

// Instance(example) of the SinglyLinkedList class
var sll = new SinglyLinkedList();

// Add
sll.insert(1); // 1 -> null
sll.insert(2); // 2 -> 1 -> null
sll.insert(3); // 3 -> 2 -> 1 -> null

// Result
sll.log(); // Prints "3 -> 2 -> 1 -> null"