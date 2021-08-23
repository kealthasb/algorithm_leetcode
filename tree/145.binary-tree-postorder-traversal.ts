/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (59.93%)
 * Likes:    2965
 * Dislikes: 121
 * Total Accepted:    538.8K
 * Total Submissions: 898.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the postorder traversal of its
 * nodes' values.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = []
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = [1]
 * Output: [1]
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: root = [1,2]
 * Output: [2,1]
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: root = [1,null,2]
 * Output: [2,1]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of the nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
    const traverse = (node: TreeNode | null, arr: number[]): void => {
        if (!node) return
        traverse(node.left, arr);
        traverse(node.right, arr);
        arr.push(node.val);
    }
    const res = [];
    traverse(root, res);
    return res
};
// @lc code=end

