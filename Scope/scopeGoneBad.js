// Thanks to https://codepen.io/johno/pen/ByojVb // https://codepen.io/johno/
var wtfJavascript = [];
var iifeFtw = [];

// fill the wtfJavascript array with functions
for (let i = 0; i < 10; i++) {
  wtfJavascript.push(function() {
    console.log(i);
  });
}
// C# foreach.
for (const func of wtfJavascript) {
  func();
}

// fill the iifeFtw array with functions
for (var i = 0; i < 10; i++) {
  iifeFtw.push(
    (function(val) {
      // the scope is no longer refering to i, but to another variable
      // we call it val.
      return function() {
        console.log(val);
      };
    })(i) // i will become local to the scope of the function
  );
}
// C# foreach.
for (const func of iifeFtw) {
  func();
}
