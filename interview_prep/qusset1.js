let a = [1, 2, 3];

for (let i = 0; i < a.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0); // Add a delay of 0 milliseconds to ensure the order
}

for (var i = 0; i < a.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0); // Add a delay of 0 milliseconds to ensure the order
}

for (let i = 0; i < a.length; i++) {
  setTimeout(() => {
    console.log(a[i]);
  }, 0); // Add a delay of 0 milliseconds to ensure the order
}

for (var i = 0; i < a.length; i++) {
  setTimeout(() => {
    console.log(a[i]);
  }, 0); // Add a delay of 0 milliseconds to ensure the order
}

const ans1 = a.map((item) => {
  if (item == 3) {
    return item;
  }
  // If it returns nothing it will return undefined
});

console.log("ANS1: ", ans1);

const ans2 = a.filter((item) => {
  if (item == 3) {
    return item;
  }
});

console.log("ANS2", ans2);
