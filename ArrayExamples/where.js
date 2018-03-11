const { fruits } = require("./arrays");

// C# Where fruits.Where(f => f == "apple")

const apples = fruits.filter(f => f === "apple");

// We can also make a bit more advanced version using generators
// The purpose is to introduce defered / lazy loading. We will only load one object
// into memory at a given time
require("./linq")();

const apples2 = fruits.where(f => f === "apple");

for (const app of apples2) {
  console.log(app);
}
