class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));


// function countNodes(root) {

//     if (!root) {
//         return 0;
//     }

//     return 1 + countNodes(root.left) + countNodes(root.right);

// }

// console.log(countNodes(tree));

function maxDepth(root) {

    if (!root) {
        return 0;
    }

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return 1 + Math.max(left, right);

}

console.log(maxDepth(tree));



function test(root, target) {

    if (!root) {
        return false;
    }

    if (root.val == target) {
        return true;
    }

    let left = test(root.left, target);
    let right = test(root.right, target);

    return left || right;

}

console.log(test(tree, 5));

tree = new TreeNode(
    4,
    new TreeNode(
        2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7)
);

console.log(searchBST(tree, 3));


var searchBST = function (root, val) {
    if (!root) {
        return null;
    }

    if (root.val == val) {
        return root;
    }

    if (val < root.val) {
        return searchBST(root.left, val);
    }

    return searchBST(root.right, val);
};

console.log(searchBST(tree, 5));