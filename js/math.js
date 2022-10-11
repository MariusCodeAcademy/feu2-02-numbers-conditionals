// atvaizduoja daugiau klaidu.
'use strict';
console.log('math.js');

let num1 = 11.58721;

// Math.roud()

let rounded = Math.round(num1);
console.log('rounded', rounded);

// floor

let floored = Math.floor(num1);
console.log('floored', floored);

// ceil
let ceiled = Math.ceil(num1);
console.log('ceiled', ceiled);

// toFixed
console.log('Fixed', num1.toFixed(2));
console.log('Fixed', +num1.toFixed(2));
console.log('Fixed', typeof +num1.toFixed(2));
// surasti kaip is 24 istraukti kvadratine sakni (Math)
console.log('Kvadratine saknis Math.sqrt', Math.sqrt(16));
// pakelti 5, 7 laipsniu
console.log('pakelti 5, 7 laipsniu', Math.pow(5, 7));
console.log('pakelti 5, 7 laipsniu', 5 ** 7);

// min max
console.log('Math.max(0, 150, 24, -15, 500, -7)', Math.max(0, 150, 24, -15, 500, -7));
console.log('Math.min(0, 150, 24, -15, 500, -7)', Math.min(0, 150, 24, -15, 500, -7));

// Ramdom
console.log('Math.random()', Math.random());
console.log('Math.random()', Math.random());

let random1to10 = Math.trunc(Math.random() * 10) + 1;
console.log('random1to10', random1to10);
