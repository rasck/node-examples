var someFunc = function(condition, cb) {
  if (condition) {
    // First parameter is the error
    // If you have more callbacks in a method, always make sure to return, so that the same callback is not called multiple times.         
    return cb("error");
  }
  cb(null, "success");
};
// Later we call someFunc using the error style callback pattern
// where the first parameter is error, and the 2nd is the resultsomeFunc(false, (err, result) => {    // Handle error    if(err) console.log(err);    // do something with result    console.log(result);});
someFunc(false, (err, result) => {
  // Handle error
  if (err) return console.log(err);
  // do something with result
  console.log(result);
});

//console.log("Hello there!");
