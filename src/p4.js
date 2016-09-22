/**
 * 4. Median of Two Sorted Arrays
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * Example 1:
 *  nums1 = [1, 3]
 *  nums2 = [2]
 *  The median is 2.0
 * 
 * Example 2:
 *  nums1 = [1, 2]
 *  nums2 = [3, 4]
 *  The median is (2 + 3)/2 = 2.5
 * 
 */

/**
 * 只实际只需取完全合并后数组的一半+1个元素，就可以计算得到中位数
 * 如果实际取到的数组长度为基数，则中位数为最后一个元素，否则中位数等于最后2个数的平均数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var rs = 0;
    var length = nums1.length + nums2.length;
    var needLen = Math.floor(ength / 2) + 1;
    var concatNums = [];
    var i = 0, j = 0, k = 0;
    while (i < nums1.length && j < nums2.length && k < needLen) {
        if (nums1[i] <= nums2[j]) {
            concatNums[k++] = nums1[i++];
        }
        else {
            concatNums[k++] = nums2[j++];
        }
    }

    while (i < nums1.length && k < needLen) {
        concatNums[k++] = nums1[i++];
    }

    while (j < nums2.length && k < needLen) {
        concatNums[k++] = nums2[j++];
    }
    if (length % 2 === 1){
        rs = concatNums[k - 1];
    }
    else {
        rs = (concatNums[k - 1] + concatNums[k - 2]) / 2;
    }
    return rs;
};