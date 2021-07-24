function getSecondLargest(nums) {

    var max = Math.max.apply(null, nums); // get the max of the array
    nums.splice(nums.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, nums); // get the 2nd max
}