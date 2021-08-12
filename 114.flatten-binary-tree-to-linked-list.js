/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	if (!root) return null;
	const arr = [root];
	const res = [];
	while (arr.length > 0) {
		const node = arr.pop();
		res.push(node);
		if (node.right) {
			arr.push(node.right);
		}
		if (node.left) {
			arr.push(node.left);
		}
	}
	for (let i = 0, len = res.length; i < len; i++) {
		res[i].left = null;
		res[i].right = i === len - 1 ? null : res[i + 1];
	}
	return res[0];
};
// @lc code=end
