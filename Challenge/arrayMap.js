function hasContiguousSubarraySum(arr, target) {
    
    let currentSum = 0;
    let start = 0;
  
    for (let i = 0; i < arr.length; i++) {
    
      currentSum += arr[i];
  
      if (currentSum === target) {
        return true;
      }
      while (currentSum > target) {
        currentSum -= arr[start];
        start++;
  
        if (start > i) {
          break;
        }
      }
    }
    return false;
  }
  
  // Test cases
  console.log(hasContiguousSubarraySum([4, 2, 7, 1, 9, 5], 14));  
  console.log(hasContiguousSubarraySum([1, 2, 3, 4, 5], 9));    
  console.log(hasContiguousSubarraySum([1, 2, 3, 4, 5], 15));   
  