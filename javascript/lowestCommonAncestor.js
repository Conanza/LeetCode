// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
//
//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var lCA = root;
  if ((p.val > root.val && q.val < root.val) || (p.val < root.val && q.val > root.val)) {
    return lCA;
  } else if (lCA.val === p.val) {
    return p;
  } else if (lCA.val === q.val) {
    return q;
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
};

var six = new TreeNode(6);
var two = new TreeNode(2);
var eight = new TreeNode(8);
var zero = new TreeNode(0);
var four = new TreeNode(4);
var seven = new TreeNode(7);
var nine = new TreeNode(9);
var three = new TreeNode(3);
var five = new TreeNode(5);

six.left = two;
six.right = eight;
two.left = zero;
two.right = four;
four.left = three;
four.right = five;
eight.left = seven;
eight.right = nine;

console.log(lowestCommonAncestor(six, two, eight));
console.log(lowestCommonAncestor(six, seven, nine));
console.log(lowestCommonAncestor(six, four, five));
