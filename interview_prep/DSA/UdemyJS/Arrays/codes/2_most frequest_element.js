const arr = [1, 2, 3, 4, 2, 2, 1];

// Find most frequent elemtent in array

function mostFrequentElement(arr) {
  const obj = {};
  let max = 0;
  let maxElement = null;

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxElement = key;
    }
  }

  console.log(obj);
  return maxElement;
}

console.log(mostFrequentElement(arr));
