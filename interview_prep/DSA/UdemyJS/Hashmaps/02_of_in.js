const car = { type: "Fiat", model: "500", color: "white" };

for (let item in car) {
  console.log(item, car[item]);
}

const cars = ["BMW", "Volvo", "Mini"];

for (let item in cars) {
  console.log(cars[item]);
}

const map = new Map();
map.set("type", "Fiat");
map.set("model", "500");

for (let [key, value] of map) {
  console.log(key, value);
}

// in access the index or key
// of axxess the value
