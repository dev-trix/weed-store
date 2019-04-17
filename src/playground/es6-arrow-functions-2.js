// arguments object -- no longer bound with arrow functions

const add = (a, b) => {
  //   console.log(arguments); es5
  return a + b;
};
console.log(add(55, 1));

// this keyword -- no longer bound

const user = {
  name: "Dev-Tirx",
  cities: ["MageBank", "East Dragons", "Graveyard Dragons"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has live in " + city);
  }
};

console.log(user.printPlacesLived());

//challenge area

const multiplier = {
  // numbers -- array of numbers
  arrayNumbers: [10, 20, 30],
  // multiplyBy - single number
  multiplyBy: 3,
  // multiply return a new array where the numbers have been multiplied
  multiply() {
    const that = this;
    return this.arrayNumbers.map(arrNum => arrNum * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

// this.cities.forEach(city => {
//   console.log(this.name + " " + "has lived in " + city);
// });
