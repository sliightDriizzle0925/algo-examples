class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }

}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value){
    if(!this.root) {
      this.root = new Node(value);
    } else {
      let currentNode = this.root;
      let foundPlace = false;
      while(!foundPlace){
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = new Node(value);
            foundPlace = true;
            currentNode = this.root;
          } else {
            currentNode = currentNode.left
          }
        } else {
          if(!currentNode.right) {
            currentNode.right = new Node(value);
            foundPlace = true;
            currentNode = this.root;
          } else {
            currentNode = currentNode.right; 
          }
        }
      }
    }
    return this;
  }
  lookup(value){
    if(!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value = value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    let nodeToRemove = this.lookup(value);
    let nodeToReplaceWith = nodeToRemove.left;
    let nodeNewRight = nodeToRemove.right;
    let currentNode = this.root;
    while(currentNode) {
      if(value < currentNode.value) {
        if(currentNode.left == nodeToRemove) {
          currentNode.left = nodeToReplaceWith;
          if(nodeToReplaceWith.right){
            nodeToReplaceWith.right = nodeNewRight;
          } else {
            nodeToReplaceWith.right = null;
          }
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if(currentNode.right == nodeToRemove) {
          if(nodeToReplaceWith.right){
            nodeToReplaceWith.right = nodeNewRight;
          } else {
            nodeToReplaceWith.right = null;
          }
          return this;
        }
        currentNode = currentNode.right;
      } else if (currentNode.value = value) {
        return this;
      }
    }
    
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    
    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchR(queue, list){
    if(!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left){
      queue.push(currentNode.left);
    }
    if(currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  console.log(node.value);
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//console.log(JSON.stringify(traverse(tree.root)));
//console.log(tree.root);
// tree.lookup(170)
// tree.remove(170);
// console.log(tree.root);
// tree.breadthFirstSearch();
// tree.breadthFirstSearchR([tree.root], [])
tree.DFSInOrder();
tree.DFSPreOrder();
tree.DFSPostOrder();

//     9
//  4     20
// 1 6  15 170

//BFS 9 4 20 1 6 15 170
//DFS 9 4 1 6 20 15 170
//In order 1, 4, 6, 9, 15, 20, 170
//Preorder 9, 4, 1, 6, 20, 15, 170 -- useful for recreating tree. 9 is root, 4 is left, 20 is right
//Postorder 1, 6, 4, 15, 170, 20, 9 -- left side, children before parent, right side, children before parent

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}