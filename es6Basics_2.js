const bicycle = {
  gear: 2,
  // setGear: function(newGear) {
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// Old syntax
// var Vegetable = function(name) {
//   this.name = name;
// }

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);