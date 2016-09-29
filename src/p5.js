/**
 * Given a string S, find the longest palindromic substring in S.
 * You may assume that the maximum length of S is 1000,
 * and there exists one unique longest palindromic substring.
 */



/**
 * Manacher 算法实现
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    //在各个字符和头尾之间插入一个不会出现在原串中的字符，使得串的长度变成奇数(2n+1)
    var ns = '#' + s.split('').join('#') + '#';
    var rl = Array(ns.length).fill(0);
    var maxRight = 0, pos = 0;
    var maxLen = 0, position = -1;
    for (var i = 0; i < ns.length; i++) {
        if (i < maxRight) {
            rl[i] = Math.min(rl[2 * pos - i], maxRight - i);
        }
        else {
            rl[i] = 1;
        }
        while( i - rl[i] >= 0 && i + rl[i] < ns.length && ns[i - rl[i]] == ns[i+rl[i]]) {
            rl[i]++;
        }
        if (rl[i] + i - 1 > maxRight) {
            maxRight = rl[i] + i - 1;
            pos = i;
        }
        if (rl[i] > maxLen) {
            maxLen = rl[i];
            position = i;
        }
    }

    var start = position - rl[position] + 1;
    var len = 2 * rl[position] - 1;

    return ns.substr(start, len).replace(/#/g, '');
    
};