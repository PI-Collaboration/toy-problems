'use strict';
// constructor functions always start with capitol letter
// arrow function will not work as a CF
// bs it doesnt have its own this keyword
const Person = function (firstName, birthYear) {
// Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create a method inside a constructor function;
  // WHY? bc if you create a 100 instances each would have the calAge function
  // and that would be terible preformance
  // What could solve this problem? Prototype and Prototypal inheritance
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const philip = new Person('phil', 1998);
const jerry = new Person('Jerry', 1996);
const foo = 'foo';

// what happens when we use the new keyword
// 1. New {} is created
// 2. function called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {}

// function constructor is like the blueprint of the house
// each obj that we create through the funtion/blueprint will
// be the actual house in the real world

// we didnt create a class because js doesnt really have classes
// in the sense of traditional OOP
// howerver we did create an object from a constructor funciton
// constructor functions have been used since the beginning of JS
// to simulate classes
// so we could say that philip is an instance of Person
// and same for jerry

// operator to test
console.log(philip instanceof Person);
console.log(foo instanceof Person);

// functions CONSTRUCTORS are not a feature of JS language
// they are a pattern that has been developed by other devs
// and now everyone uses it

// With strict mode, you can not, for example, use undeclared variables.
// All modern browsers support "use strict" except Internet Explorer 9 and lower: