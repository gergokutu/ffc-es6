// Named exports
import { uppercaseString, lowercaseString } from './string_functions.js';

console.log(uppercaseString("hello"));
console.log(lowercaseString("WORLD!"));

// Named > all with *
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Import default export
// You can give any name instead of subtract
import subtract from "./math_functions.js";

subtract(7, 4);