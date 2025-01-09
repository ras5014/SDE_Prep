// Matrix Sum Function
const matrixSum = (matA, matB) => {
  // Check if matrices are valid
  if (matA.length !== matB.length || matA[0].length !== matB[0].length) {
    throw new Error("Matrices are not valid");
  }

  // Create a new matrix
  const result = [];

  for (let i = 0; i < matA.length; i++) {
    result.push([]);

    for (let j = 0; j < matA[i].length; j++) {
      result[i].push(matA[i][j] + matB[i][j]);
    }
  }

  return result;
};

const matA = [
  [1, 2],
  [3, 4],
];

const matB = [
  [5, 6],
  [7, 8],
];

console.table(matrixSum(matA, matB)); // Output: [[6, 8], [10, 12]]
