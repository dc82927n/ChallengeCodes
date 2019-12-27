function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}    

// create nodes
let BST = new BinarySearchTree();
BST.insertRec(10); 
BST.insertRec(15); 
BST.insertRec(5); 
BST.insertRec(50); 
BST.insertRec(3); 
BST.insertRec(7); 
BST.insertRec(12); 
BST.postOrder();
// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;


function postOrderHelper(root) {
   if (root !== null) {
      postOrderHelper(root.left);
      postOrderHelper(root.right);
      console.log(root.data);
   }
}

console.log(postOrderHelper(root, [])); // => [ A, B, D, E, C ]


