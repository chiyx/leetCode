/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, 
 * "pwke" is a subsequence and not a substring.
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var hash = {};
    var attrPrefix = 'ap';
    var rs = 0, start = 0;
    for (var i = 0; i < s.length; i++) {
        // 遇到重复字符
        if (hash[attrPrefix + s[i]] !== undefined) {
            // (i - start) 为本次统计到的子串长度
            if (rs < i - start) rs = i - start;
            // 将重复字符之前的字符出现标记清空
            for (var j = start; j < hash[attrPrefix + s[i]]; j++) delete hash[attrPrefix + s[j]];
            start = hash[attrPrefix + s[i]] + 1;
        }
        hash[attrPrefix + s[i]] = i;
    }
    if (rs < i - start) rs = i - start;
    return rs;
};