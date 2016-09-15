/**
 * 2. Add Two Numbers
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    var linkToNum = function (link) {
        var rs = 0;
        var p = link;
        var base = 1;
        while (p) {
            rs += base * p.val;
            p = p.next;
            base *= 10;
        }
        return rs;
    };
    var numToLink = function (num) {
        var root = null;
        var parent = root;
        do {
            var curVal = num % 10;
            var curNode = new ListNode(curVal);
            if (parent) {
                parent.next = curNode;
            } 
            else {
                root = curNode;
            }
            parent = curNode;
            num = parseInt(num / 10);
        } while (num !== 0);
        return root;
    };

    var num1 = linkToNum(l1);
    var num2 = linkToNum(l2);
    return numToLink(num1 + num2);
};