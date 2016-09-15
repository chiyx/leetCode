/**
 *  Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
 * You may assume that each input would have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var result = [];
    var tempMap = new Map();
    var exculdes = new Map();
    nums.forEach(function (item, index) {
        tempMap.set(item, index);
    });
    nums.forEach(function (item, index) {
        if (exculdes.get(index)) return;
        var other = target - item;
        var maybe = tempMap.get(other);
        if (maybe && maybe !== index) {
            result.push(index);
            result.push(maybe);
            exculdes.set(maybe, true);
        }
    });
    return result;
};