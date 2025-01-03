function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    const len = arr.length;
  
    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
  
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
  
    return result;
}
  


function myIndexOf(arr, item, from = 0) {
    const len = arr.length;
  
    from = from < 0 ? Math.max(len + from, 0) : from;
  
    for (let i = from; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  
    return -1;
}



function myIncludes(arr, item, from = 0) {
    const len = arr.length;
  
    from = from < 0 ? Math.max(len + from, 0) : from;
  
    for (let i = from; i < len; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
  
    return false;
}
  



console.log(mySlice([1, 2, 3, 4], 1, 3)); // [2, 3]
console.log(myIndexOf([1, 2, 3, 4], 3)); // 2
console.log(myIncludes([1, 2, 3, 4], 3)); // true