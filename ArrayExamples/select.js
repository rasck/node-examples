const { fruits } = require("./arrays");

// C# Select: fruits.Select(f => new { Name = f } );
const fruitObjects = fruits.map(f => {
  return {
    name: f
  };
});
console.log(fruitObjects);
