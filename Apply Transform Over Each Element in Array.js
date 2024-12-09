/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let number=[]
    for(i=0;i<=arr.length-1;i++){
        number.push(fn(arr[i],i))
    }
   return number
};