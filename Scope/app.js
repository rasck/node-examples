var a = 34;
var g = "female";

var res = (function PersonModule(age, gender) {
  function calcRealAge() {
    if (gender === "female") return age + 10;
    return age;
  }

  return {
    person: {
      Name: "Jane",
      Gender: gender,
      Age: calcRealAge()
    }
  };
})(a, g);

console.log(res);




/*var person = require("./person");

console.log(person.personApi.getPerson(age, gender)); */