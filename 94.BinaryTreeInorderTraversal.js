// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1, null, 2, 3]
// Output: [1, 3, 2]

// Example 2:

// Input: root = []
// Output: []

// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

//     The number of nodes in the tree is in the range[0, 100].
//     - 100 <= Node.val <= 100

// MY NOTES: MORRIS ALGORITHM.

var inorderTraversal = function (root) {
    let tourist = root;
    let solution = [];

    while (tourist !== null) {
        let guide = tourist.left;
        if (tourist.left !== null) {
            while (guide.right !== null && guide.right !== tourist) {
                guide = guide.right;
            }
            if (guide.right === null) {
                guide.right = tourist;
                tourist = tourist.left;
            } else {
                guide.right = null;
                solution.push(tourist.val);
                tourist = tourist.right;
            }
        } else {
            solution.push(tourist.val);
            tourist = tourist.right;
        }
    }
    return solution;
};