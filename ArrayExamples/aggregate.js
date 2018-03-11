const { fruits } = require("./arrays");

// C# Aggregate https://msdn.microsoft.com/en-us/library/bb548651(v=vs.110).aspx

// with lampbda
const fruitlist = fruits.reduce(
  (fprev, fcurrent) => fprev + " and " + fcurrent
);

// with functions
const reducer = function(previousElement, currentElement) {
  return previousElement + " and " + currentElement;
};
const fruitlist2 = fruits.reduce(reducer);

// how to do the same with loops
let fruitlist3 = "";
for (let index = 0; index < fruits.length; index++) {
  if (index === 0) fruitlist3 = fruits[index];
  else fruitlist3 += " and " + fruits[index];
}

console.log(fruitlist3);
