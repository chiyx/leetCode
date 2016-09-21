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

    // 进位
    var c = 0;
    var root = null;
    var parent = root;
    var p = l1, q = l2;
    var sum, curNode;
    while (p && q) {
        sum = p.val + q.val + c;
        c = Math.floor(sum / 10);
        curNode = new ListNode(sum % 10);
        if (parent) {
            parent.next = curNode;
        }
        else {
            root = curNode;
        }
        parent = curNode;
        p = p.next;
        q = q.next;
    }

    while (p) {
        sum = p.val + c;
        c = Math.floor(sum / 10);
        curNode = new ListNode(sum % 10);
        if (parent) {
            parent.next = curNode;
        }
        else {
            root = curNode;
        }
        parent = curNode;
        p = p.next;
    }


    while (q) {
        sum = q.val + c;
        c = Math.floor(sum / 10);
        curNode = new ListNode(sum % 10);
        if (parent) {
            parent.next = curNode;
        }
        else {
            root = curNode;
        }
        parent = curNode;
        q = q.next;
    }

    if (c > 0) {
        sum = c;
        curNode = new ListNode(sum % 10);
        if (parent) {
            parent.next = curNode;
        }
        else {
            root = curNode;
        }
        parent = curNode;
    }

    return root;

};