function countPairs(arr) {
  let count = 0;
  const pairs = {};
  for (let i = 0; i < arr.length; i++) {
    if (pairs[arr[i]]) {
      count++;
      pairs[arr[i]] = 0;
    } else {
      pairs[arr[i]] = 1;
    }
  }
  return count;
}


//Examples

let array1 = [1, 1, 3, 1, 2, 1, 6, 3, 3, 6];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(countPairs(array1)); 
console.log(countPairs(array2));