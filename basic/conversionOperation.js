let score = "33"
let score1 = "33abc"
let score2 = null
let score3 = undefined
let score4  = true
let score5 = "false"
let score6 = false
console.log(typeof score);
console.log(typeof(score));

let isNumber = Number(score)
console.log(typeof isNumber); //number
console.log(isNumber);// 33

let isNumber1 = Number(score1)
console.log(typeof isNumber1); //number
console.log(isNumber1);// NaN

let isNumber2 = Number(score2)
console.log(typeof isNumber2); //number
console.log(isNumber2);// 0

let isNumber3 = Number(score3)
console.log(typeof isNumber3); //number
console.log(isNumber3);// NaN

let isNumber4 = Number(score4)
console.log(typeof isNumber4); //number
console.log(isNumber4);// 1

let isNumber5 = Number(score5)
console.log(typeof isNumber5); //number
console.log(isNumber5);// NaN

let isNumber6 = Number(score6)
console.log(typeof isNumber6); //number
console.log(isNumber6);// 0

/*
  Conversion of Number
  "33" => 33
  "33abc" => NaN
  null => 0
  undefined => NaN
  true => 1
  "false" => NaN
  false => 0
*/

let isLoggedIn = "33abc"
let isBoolean = Boolean(isLoggedIn)
console.log(isBoolean); //true

/*
  Conversion of Boolean
  "" => false
  "33abc" => true
  0 => false
  1 => true
  undefined => false
  null => false
  true => true
  false => false
*/

let isLoggedIn1 = null
let isString = String(isLoggedIn1)
console.log(isString); //true

/*
  Conversion of String
  "33abc" => 33abc
  "" => 
  3334 => 3334
  undefined => undefined
  null => null
*/
