function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q){
    if(root === null || root===p|| root === q){
        return root;
    }

    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right, p ,q);

    if(left && right){
        return root;
    }

    return left? left:right;
}

let node1 = new TreeNode (3);
let node2 = new TreeNode (5);
let node3 = new TreeNode (1);
let node4 = new TreeNode (6);
let node5 = new TreeNode (2);
let node6 = new TreeNode (0);
let node7 = new TreeNode (8);
let node8 = new TreeNode (7);
let node9 = new TreeNode (4);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node5.left = node8;
node5.right = node9;


console.log(lowestCommonAncestor(node1, node2, node3))
