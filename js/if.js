'use strict';
console.log('if.js');

// paprastas IF  ==========================
// if (<salyga>) {
//  kodo blokas vygdomas jei salyga yra true arba truthy
//   .....
// }

// IF ELSE ==========================
// if (<salyga>) {
//  kodo blokas vygdomas jei salyga yra true arba truthy
//   .....
// } else {
// vygdomas kai salyga yra false
// }

// ELSE IF ==========================
// if (<salyga1>) {
//  kodo blokas vygdomas jei salyga1 yra true arba truthy
//   .....
// } else if (<salyga2>) {
// vygdomas kai salyga1 yra false arba falsey, ir salyga2 yra true arba truethy
// } else {
// vygdomas kai kai salyga1 ir salyga2 yra false arba falsey
// }

let num1 = 10000;
let num2 = 5e4;

if (num1 > num2) {
  //  kodo blokas vygdomas jei salyga yra true arba truthy
  console.log(`${num1} yra daugiau uz ${num2}`);
} else {
  // vygdomas kai salyga yra false
  console.log(`${num1} nera daugiau uz ${num2}`);
}
