'use strict';

let age = 70;

if (age < 0) {
  console.log('netinkamas amzius');
} else if (age > 200) {
  console.log('Greiciausiai meluojama apie amziu');
} else if (age >= 18) {
  // age yra daugiau uz 0 ir daugiau uz 17 ir maziau uz 200
  console.log('Zmogus yra suauges');
} else {
  console.log('Zmogus yra vaikas');
}
