function isValidBST(root) {
    function helper(node, min, max) {
        if (!node) return true; 
        if (node.val <= min || node.val >= max) return false;
        
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }
    return helper(root, -Infinity, Infinity);
}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root1)); 

