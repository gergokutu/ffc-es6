let catName;
let quote;

function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

console.log("catName:", catName);
console.log("quote:", quote);

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
console.log("Return value:", checkScope());

function printManyTimes(str) {
  "use strict";
  const SENTENCE = str + " rules!";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("Pocok");

const s = [5, 7, 2];
function editInPlace(s) {
  'use strict';
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace(s);
console.log("Modified array:", s);

function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

const magic = () => {
  "use strict";
  return new Date();
};

const magic2 = () => new Date();
console.log(magic2());

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number = 1, value = 1) => number + value;
console.log("Default param increment:", increment());

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;

{
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
}

