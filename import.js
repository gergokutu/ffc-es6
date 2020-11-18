// Named exports
import { uppercaseString, lowercaseString } from './string_functions.js';

console.log(uppercaseString("hello"));
console.log(lowercaseString("WORLD!"));

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");