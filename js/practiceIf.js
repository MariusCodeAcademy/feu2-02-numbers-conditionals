'use strict';

// 1 ir 1.1 pratimas ============================
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

// 2  pratimas ============================

let isMarried = false;
let asn1 = 'Stai jums Suzadetuviu ziedu kolekcija';
let asn2 = 'Naujausi Televizoriu modeliai CIA';

if (isMarried === true) {
  console.log(asn2);
} else {
  console.log(asn1);
}
