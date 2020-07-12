//Binary search tree
class Node {
  constructor(value){
this.value = value;
this.left = null;
this.right = null;
  }
}

class BST {
  constructor(value) {
this.root = new Node(value);
this.count = 0
  }
  //size
  size() {
return this.count;
  }
  //insert 
  insert(value) {
this.count++

let newNode = new Node(value)

const searchTree = node => {
// if the value is less then node.value then go left
if (value < node.value) {
  if(!node.left){
    node.left = newNode
  } else {
    searchTree(node.left)
  }
  
  } else if (value > node.value) {
if (!node.right) {
  node.right = newNode
} else {
  searchTree(node.right)
}
      }
    }
    searchTree(this.root)
}
  //min
  min() {
    let currentNode = this.root
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
  //max
  max() {
let currentNode = this.root
while(currentNode.right) {
  currentNode = currentNode.right
}
return currentNode.value
  }
  // contains
  contains(value) {
    
  }
  //serching DFS
  dfsInOrder() {

  }

  dfsPreOrder() {

  }
  dfsPostOrder() {

  }

  //BFS

  bfs() {

  }

}