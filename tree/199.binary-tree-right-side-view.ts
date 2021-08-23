/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (57.53%)
 * Likes:    4627
 * Dislikes: 248
 * Total Accepted:    499.6K
 * Total Submissions: 868K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * Given the root of a binary tree, imagine yourself standing on the right side
 * of it, return the values of the nodes you can see ordered from top to
 * bottom.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1,null,3]
 * Output: [1,3]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = []
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return []
    const arr = [[root]];
    const res = [];
    while (arr.length > 0) {
        const temp = arr[0].shift();
        if (arr[0].length === 0) {
            res.push(temp.val);
        }
        if (temp.left || temp.right) {
            arr[1] ?? (arr[1] = []);
            temp.left && arr[1].push(temp.left);
            temp.right && arr[1].push(temp.right);
        }
        arr[0].length === 0 && arr.shift();
    }
    return res
};
// @lc code=end

