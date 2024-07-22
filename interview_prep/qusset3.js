const array = [1, [2, [3, 4]], 5];

let result = [];
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      flatten(arr[i]);
    }
  }
}

flatten(array);

console.log(result);

const arr = [1, 10, 8, 2, 2, 5, 4, 4, 4];
// 1, 2, 4, 5, 8, 10

let repNum = [];
const res = arr.filter((item) => {
  if (!repNum.includes(item)) {
    repNum.push(item);
    return item;
  }
});
