// inspired by https://gist.github.com/DanDiplo/30528387da41332ff22b

const fruits = ["apple", "orange", "melon"];


// C# OrderBy

// const sortedFruits = fruits.sort((fPrev, fCurrent) => {
//   fPrev = fPrev.toLowerCase();
//   fCurrent = fCurrent.toLowerCase();
//   if (fPrev < fCurrent) return -1;
//   else if (fPrev > fCurrent) return 1;
//   else return 0;
// });

// but sort mutates our original fruits array.
// Lets create a better version where we use Object.assign method
// to avoid mutating the current (this) array

// compare is optional. If provived compare should be a function taking two arguments and return an integer
// orderBy returns a sorted array.
Array.prototype.orderBy = function(compare) {
  if (compare instanceof Function) return Object.assign([], this).sort(compare);
  else return Object.assign([], this).sort();
};

const sortedArr = fruits.orderBy((fPrev, fCurrent) => {
  fPrev = fPrev.toLowerCase();
  fCurrent = fCurrent.toLowerCase();
  if (fPrev < fCurrent) return -1;
  else if (fPrev > fCurrent) return 1;
  else return 0;
});

console.log("non-sorted:");
console.log(fruits);
console.log("soreted:");
console.log(sortedArr);

// const cars = ["Mazda", "Ford", "Skoda"];
// const sortedCars = cars.orderBy();
// console.log(sortedCars);
