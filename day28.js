class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var isSymmetric = function(root) {
    if (!root) return true; 

    function isMirror(t1, t2) {
        if (!t1 && !t2) return true;   
        if (!t1 || !t2) return false;  
        return (t1.val === t2.val) &&
               isMirror(t1.left, t2.right) &&
               isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
};

console.log(isSymmetric(
    new TreeNode(1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
))
