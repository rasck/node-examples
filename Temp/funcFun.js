let PersonConstructor = function(firstName, lastName, age) {
  this.age = age;
  this.firstName = firstName;
  this.lastName = lastName;
};

PersonConstructor.prototype.FullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

let a = new PersonConstructor("Hans", "Lindberg", 40);

let b = Object.create(a);

b.firstName = "Hula";

let EmployeeConstructor = function(firstName, lastName, age, email, company) {
  PersonConstructor.call(this, firstName, lastName, age);
  this.email = email;
  this.company = company;
};

EmployeeConstructor.prototype = Object.create(PersonConstructor.prototype);
EmployeeConstructor.prototype.constructor = EmployeeConstructor;

EmployeeConstructor.prototype.ShowBusinessCard = function() {
  let businessCard = `Company: ${this.company} \nEmail: ${
    this.email
  }\nFull Name: ${this.FullName()}`;
  return businessCard;
};

var emp = new EmployeeConstructor(
  "Kurt",
  "Hansen",
  40,
  "kurt@wstocks.com",
  "Wood Stocks"
);

console.log(emp.ShowBusinessCard());
