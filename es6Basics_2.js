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

class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }

  get temperature() {
    return 5 / 9 * (this._temperature - 32);
  }

  set temperature(tempInCelsius) {
    this._temperature = tempInCelsius * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);