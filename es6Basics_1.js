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