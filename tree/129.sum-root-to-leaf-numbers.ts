/*
 * @lc app=leetcode id=129 lang=typescript
 *
 * [129] Sum Root to Leaf Numbers
 *
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
 *
 * algorithms
 * Medium (52.83%)
 * Likes:    2735
 * Dislikes: 65
 * Total Accepted:    355.7K
 * Total Submissions: 672.8K
 * Testcase Example:  '[1,2,3]'
 *
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * 
 * Each root-to-leaf path in the tree represents a number.
 * 
 * 
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 * 
 * 
 * Return the total sum of all root-to-leaf numbers. Test cases are generated
 * so that the answer will fit in a 32-bit integer.
 * 
 * A leaf node is a node with no children.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,2,3]
 * Output: 25
 * Explanation:
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 * Therefore, sum = 12 + 13 = 25.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [4,9,0,5,1]
 * Output: 1026
 * Explanation:
 * The root-to-leaf path 4->9->5 represents the number 495.
 * The root-to-leaf path 4->9->1 represents the number 491.
 * The root-to-leaf path 4->0 represents the number 40.
 * Therefore, sum = 495 + 491 + 40 = 1026.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [1, 1000].
 * 0 <= Node.val <= 9
 * The depth of the tree will not exceed 10.
 * 
 * 
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
function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0
    const res = [];
    const traverse = (root: TreeNode | null, arr: TreeNode[], len: number) => {
        if (!root) return
        arr.splice(len)
        arr.push(root);
        len++;
        if (root.left) {
            traverse(root.left, arr, len);
        }
        if (root.right) {
            traverse(root.right, arr, len);
        }
        if (!root.left && !root.right) {
            let sum = '';
            arr.forEach(ele => {
                sum += ele.val;
            })
            res.push(Number(sum));
        }
    }
    traverse(root, [], 0);
    return res.reduce((prev, curr) => prev + curr)
};
// sumNumbers(root);
// @lc code=end

